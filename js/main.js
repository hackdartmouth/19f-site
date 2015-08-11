PINE_SCHEDULE = {
  OPTIONALS: {
    "borders": true,
    "background_color": "#FFFFFF",
    "header_alignment": "center"
  },
  RANGE: {
    "start": 9.0,
    "end": 23.0
  }
};

PineSchedule.load(".day-1", {
  "optionals": PINE_SCHEDULE.OPTIONALS,
  "day_of_week": "SAT",
  "month": "OCT",
  "day": 3,
  "range": PINE_SCHEDULE.RANGE,
  "events": [
    {
      "time_range": "10-11am",
      "name": "REGISTRATION",
      "location": "Cook Auditorium",
      "color": "#8BB9B6",
      "start": 10.0,
      "end": 11.0
    },
    {
      "time_range": "11am-12:30pm",
      "name": "OPENING SESSION",
      "location": "Cook Auditorium",
      "color": "#E6D275",
      "start": 11.0,
      "end": 12.5
    },
    {
      "time_range": "1-2pm",
      "name": "LUNCH",
      "location": "Thayer Atrium",
      "color": "#BFDC85",
      "start": 13.0,
      "end": 14.0
    },
    {
      "time_range": "2:30-3:30pm",
      "name": "WORKSHOP",
      "location": "Couch Lab",
      "color": "#EBEF8F",
      "start": 14.5,
      "end": 15.5
    },
    {
      "time_range": "7-8pm",
      "name": "DINNER",
      "location": "Thayer Atrium",
      "color": "#BFDC85",
      "start": 19.0,
      "end": 20.0
    },
    {
      "time_range": "9-9:30pm",
      "name": "SHEBA SHOW",
      "location": "Great Hall",
      "color": "#DF8B80",
      "start": 21.0,
      "end": 21.5
    }
  ]
});

PineSchedule.load(".day-2", {
  "optionals": PINE_SCHEDULE.OPTIONALS,
  "day_of_week": "SUN",
  "month": "OCT",
  "day": 4,
  "range": PINE_SCHEDULE.RANGE,
  "events": [
    {
      "time_range": "10-11am",
      "name": "REGISTRATION",
      "location": "Cook Auditorium",
      "color": "#8BB9B6",
      "start": 10.0,
      "end": 11.0
    },
    {
      "time_range": "11am-12:30pm",
      "name": "OPENING SESSION",
      "location": "Cook Auditorium",
      "color": "#E6D275",
      "start": 11.0,
      "end": 12.5
    },
    {
      "time_range": "1-2pm",
      "name": "LUNCH",
      "location": "Thayer Atrium",
      "color": "#BFDC85",
      "start": 13.0,
      "end": 14.0
    },
    {
      "time_range": "2:30-3:30pm",
      "name": "WORKSHOP",
      "location": "Couch Lab",
      "color": "#EBEF8F",
      "start": 14.5,
      "end": 15.5
    },
    {
      "time_range": "7-8pm",
      "name": "DINNER",
      "location": "Thayer Atrium",
      "color": "#BFDC85",
      "start": 19.0,
      "end": 20.0
    },
    {
      "time_range": "9-9:30pm",
      "name": "SHEBA SHOW",
      "location": "Great Hall",
      "color": "#DF8B80",
      "start": 21.0,
      "end": 21.5
    }
  ]
});

$(document).ready(function(){
  var faqHeight = $('.faq').height();
  var faqWidth = $('.faq').width();
  var lineHeight = $('#linecount-start').height();
  var lineCount = faqHeight/lineHeight;

  for(i = 1; i < lineCount; i++){
    var newNode = document.createElement('li');
    var innerContent = document.createTextNode(i);
    newNode.appendChild(innerContent);
    document.getElementById('sidebar').appendChild(newNode);
  }
});

// dynamically update line numbers
$(window).resize(function(){
  // clear out line counts on resize
  var topNode = document.getElementById('sidebar');
  while(topNode.firstChild){
    topNode.removeChild(topNode.firstChild);
  }

  var firstNode = document.createElement('li');
  firstNode.id = 'linecount-start';
  firstNode.innerHTML = '&nbsp;';
  document.getElementById('sidebar').appendChild(firstNode);

  var faqHeight = $('.faq').height();
  var faqWidth = $('.faq').width();
  var lineHeight = $('#linecount-start').height();
  var lineCount = faqHeight/lineHeight;

  for(i = 1; i < lineCount; i++){
    var newNode = document.createElement('li');
    var innerContent = document.createTextNode(i);
    newNode.appendChild(innerContent);
    document.getElementById('sidebar').appendChild(newNode);
  }
});
