/* -----------------------------------------------
/* Author : Daniel Chen - danieljchen.com
/* MIT license: http://opensource.org/licenses/MIT
/* GitHub : github.com/cheniel/pine-schedule.js
/* ----------------------------------------------- */
window.PineSchedule = {};
window.PineSchedule.load = function(dom_id, data) {
  if (!data.optionals) { data.optionals = {}; }
  var TB_DISPLAY_TYPE = {
    NONE: 0,
    ONE_LINE: 1,
    MULTI_LINE_FIRST: 2,
    MULTI_LINE_SECOND: 3,
  };

  var DEFAULT = {
    TIME_BLOCK_COLOR: data.optionals.background_color,
    HEADER_ALIGNMENT: data.optionals.header_alignment ? data.optionals.header_alignment : "right",
    HEADER_FONT_SIZE: data.optionals.header_font_size ? data.optionals.header_font_size : "25px",
    HEADER_FONT: data.optionals.header_font ? data.optionals.header_font : "Verdana, Geneva, sans-serif",
    BORDERS: !!data.optionals.borders,
    SHOW_GRID_ON_EVENT: !!data.optionals.show_grid_on_event
  };

  var container = d3.select(dom_id).style("font-family", DEFAULT.HEADER_FONT);
  var table = container.append("table");

  var header = table.append("thead");
  header.append("td");
  header_data = header.append("td");
  header_data.style("text-align", DEFAULT.HEADER_ALIGNMENT).style("font-size", DEFAULT.HEADER_FONT_SIZE);
  header_data.append("b").text(data.day_of_week);
  header_data.append("span").text(", " + data.month + " " + data.day);

  var data_at_time = [];
  data.events.forEach(function(e) {
    time_blocks_for_event = (e.end - e.start) / 0.5;
    time_block_number = 1;
    for (var time = e.start; time < e.end; time += 0.5) {
      if (time in data_at_time) {
        console.log("PineSchedule: skipping event " + e.name + " because overlap");
        continue;
      }

      if (time_blocks_for_event < 1) {
        console.log("PineSchedule: skipping event " + e.name + " because duration");
        continue;
      }

      time_block_display_type = TB_DISPLAY_TYPE.NONE;
      if (time_blocks_for_event === 1 && time_block_number === 1) {
        time_block_display_type = TB_DISPLAY_TYPE.ONE_LINE;
      } else if (time_blocks_for_event > 1 && time_block_number === 1) {
        time_block_display_type = TB_DISPLAY_TYPE.MULTI_LINE_FIRST;
      } else if (time_blocks_for_event > 1 && time_block_number === 2) {
        time_block_display_type = TB_DISPLAY_TYPE.MULTI_LINE_SECOND;
      }
      data_at_time[time] = { event: e, display_type: time_block_display_type };
      time_block_number++;
    }
  });

  var time_blocks = [];
  for (var t = data.range.start; t < data.range.end; t += 0.5) {
    d = (data_at_time[t] || {});
    time_blocks.push(new TimeBlock(t, d.event, d.display_type));
  }

  table.style("width", "100%").style("border-collapse", "collapse");
  rows = table.selectAll("tr").data(time_blocks).enter().append("tr").style("height", "25px");

  time_column = rows.append("td")
    .style("text-align", "right")
    .style("width", "10%")
    .style("border-right", "solid #D3D3D3 2px")
    .style("padding-right", "5px")
    .text(function(d) { return d.get_pretty_time(); });

  values_column = rows.append("td")
    .style("background-color", function(d) { return d.color(); })
    .style("padding-left", "5px")
    .html(function(d) { return d.get_displayed_info(); });

  if (DEFAULT.BORDERS) {
    values_column.style("border-right", "solid #D3D3D3 2px");
    values_column.style("border-top", function(d) { return d.get_border_top(); });
    d3.select(values_column.node()).style("border-top", "solid #D3D3D3 2px");
    d3.select(values_column[0][values_column.size() - 1]).style("border-bottom", "solid #D3D3D3 2px");
  }

  function TimeBlock(time, event, display_type) {
    this.time = time;
    this.event = event;
    this.display_type = display_type;
    this.is_top_of_hour = function() {
      return this.time * 10 % 10 === 0;
    };
    this.get_border_top = function() {
      if (DEFAULT.SHOW_GRID_ON_EVENT ||
          !this.event ||
          this.display_type == TB_DISPLAY_TYPE.ONE_LINE ||
          this.display_type == TB_DISPLAY_TYPE.MULTI_LINE_FIRST) {
        if (this.is_top_of_hour()) {
          return "dotted #D3D3D3 1px";
        } else {
          return "dashed #D3D3D3 1px";
        }
      }
    };
    this.get_pretty_time = function() {
      if (this.is_top_of_hour()) {
        if (this.time <= 12) {
          return this.time + "am";
        } else {
          return (this.time - 12) + "pm";
        }
      }
    };
    this.get_displayed_info = function() {
      switch(this.display_type) {
        case TB_DISPLAY_TYPE.ONE_LINE:
          return this.event.time_range + " | <b>" + this.event.name + "</b> <i>" + this.event.location + "</i>";
        case TB_DISPLAY_TYPE.MULTI_LINE_FIRST:
          return this.event.time_range + " | <b>" + this.event.name + "</b>";
        case TB_DISPLAY_TYPE.MULTI_LINE_SECOND:
          return "<i>" + this.event.location + "</i>";
      }
    };
    this.color = function() {
      return this.event ? this.event.color : DEFAULT.TIME_BLOCK_COLOR;
    };
  }
};
