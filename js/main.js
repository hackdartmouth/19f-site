PINE_SCHEDULE = {
  OPTIONALS: {
    "borders": true,
    "background_color": "#FFFFFF",
    "header_alignment": "center"
  },
  DAY_1_START: 10.0,
  DAY_2_START: 7.0,
  HOURS_TO_SHOW: 15,
};

PineSchedule.load(".day-0", {
  "optionals": PINE_SCHEDULE.OPTIONALS,
  "day_of_week": "FRI",
  "month": "OCT",
  "day": 2,
  "range": {
    "start": 16.0,
    "end": 17.0
  },
  "events": [
    {
      "time_range": "4-5pm",
      "name": "Microsoft Workshop",
      "location": "Maclean B01",
      "color": "#E6F176",
      "start": 16.0,
      "end": 17.0
    },
  ]
});


PineSchedule.load(".day-1", {
  "optionals": PINE_SCHEDULE.OPTIONALS,
  "day_of_week": "SAT",
  "month": "OCT",
  "day": 3,
  "range": {
    "start": PINE_SCHEDULE.DAY_1_START,
    "end": PINE_SCHEDULE.DAY_1_START + PINE_SCHEDULE.HOURS_TO_SHOW
  },
  "events": [
    {
      "time_range": "10-11am",
      "name": "Registration",
      "location": "Filene Auditorium - Moore",
      "color": "#8BB9B6",
      "start": 10.0,
      "end": 11.0
    },
    {
      "time_range": "11am-12pm",
      "name": "Opening Ceremony",
      "location": "Filene Auditorium - Moore",
      "color": "#E0CC5C",
      "start": 11.0,
      "end": 12.5
    },
    {
      "time_range": "12:30-1:30pm",
      "name": "Lunch (Moe's), Team Formation, Hacking!",
      "location": "Haldeman",
      "color": "#B2D96D",
      "start": 12.5,
      "end": 13.5
    },
    {
      "time_range": "1:30-2:30pm",
      "name": "DEN Talk: Beyond the Hack",
      "location": "Kemeny 008",
      "color": "#E6F176",
      "start": 13.5,
      "end": 14.5
    },
    {
      "time_range": "2:30-3:30pm",
      "name": "Intralinks Workshop",
      "location": "Kemeny 008",
      "color": "#E6F176",
      "start": 14.5,
      "end": 15.5
    },
    {
      "time_range": "3:30-4:30pm",
      "name": "Thayer Workshop: Hacking the Raspberry Pi",
      "location": "Kemeny 008",
      "color": "#E6F176",
      "start": 15.5,
      "end": 16.5
    },
    {
      "time_range": "4:30-5pm",
      "name": "Presenting Your Experience on Paper",
      "location": "Kemeny 008",
      "color": "#E6F176",
      "start": 16.5,
      "end": 17.0
    },
    {
      "time_range": "7pm",

      "name": "Dinner (Gas Station Chinese)",
      "location": "Haldeman",
      "color": "#B2D96D",
      "start": 19.0,
      "end": 20.0
    },
    {
      "time_range" : "12-1am",
      "name": "Midnight Activity!",
      "location": "Haldeman",
      "color": "#D7766B",
      "start": 24.0,
      "end": 25.0
    },
  ]
});

PineSchedule.load(".day-2", {
  "optionals": PINE_SCHEDULE.OPTIONALS,
  "day_of_week": "SUN",
  "month": "OCT",
  "day": 4,
  "range": {
    "start": PINE_SCHEDULE.DAY_2_START,
    "end": PINE_SCHEDULE.DAY_2_START + PINE_SCHEDULE.HOURS_TO_SHOW
  },
  "events": [
    {
      "time_range": "8-9:30am",
      "name": "Breakfast (Lou's)",
      "location": "Haldeman",
      "color": "#B2D96D",
      "start": 8.0,
      "end": 9.5
    },
    {
      "time_range": "10am",
      "name": "Project Submissions Due",
      "color": "#8BB9B6",
      "start": 10.0,
      "end": 10.5,
    },
    {
      "time_range": "10:30am-12pm",
      "name": "Project demos and First Round Judging",
      "location": "Kemeny 006 and 007",
      "color": "#8BB9B6",
      "start": 10.5,
      "end": 12.0,
    },
    {
      "time_range": "12-1pm",
      "name": "Lunch (Subway)",
      "location": "Haldeman",
      "color": "#B2D96D",
      "start": 12.0,
      "end": 13.0
    },
    {
      "time_range": "1-3pm",
      "name": "Closing Ceremony",
      "location": "Filene Auditorium - Moore",
      "color": "#E0CC5C",
      "start": 13.0,
      "end": 15.0
    },
    {
      "time_range": "3:30pm",
      "name": "Buses to NY and Boston depart",
      "location": "The Hopkins Center for the Arts",
      "color": "#BFBFBF",
      "start": 15.5,
      "end": 16.5
    }
  ]
});

var playing = false;
var nyanCat = new Audio("misc/nyancat.mp3");

function hehehe(){
  if(!playing){
    $("#lol").css("display","block");
    nyanCat.play();
    playing = true;
    var nyanFly = setInterval(function(){
      var timer = $("#lol").stop().animate({"margin-left" : "+=60%"}, 5000);
      if ($("#lol").offset().left > $(window).width()) {
        clearInterval(nyanFly);
      }
    }, 5000);
  } else {
    $("#lol").css("display","none");
    nyanCat.pause();
    playing = false;
  }
}

function jumpToSection(event, targetSection){
  event.preventDefault();
  var navbarHeight = $("#myNav").height();
  var controlString = null;
  switch(targetSection){
    case "s1":
      controlString = "#about";
      break;
    case "s2":
      controlString = "#schedule";
      break;
    case "s3":
      controlString = "#faq";
      break;
    case "s4":
      controlString = "#sponsors";
      break;
    case "s5":
      controlString = "#apply";
      break;
    default:
      controlString = "#";
  }
  var sectionOffset = $(controlString).offset().top;
  $("html, body").animate({
    scrollTop : sectionOffset - navbarHeight + 1
  }, 1000);
}

$(document).ready(function(){
  var faqHeight = $('#faq').height();
  var faqWidth = $('#faq').width();
  var lineHeight = $('#linecount-start').height();
  var lineCount = faqHeight/lineHeight;
  var scrolledDown = false;
  var placeholderNavBar = $('#placeholderNav')
  var navBar = $('#myNav')
  var active_nav_button = undefined

  setCollapsibility()
  refreshNavBar()

  for(i = 1; i < lineCount; i++){
    var newNode = document.createElement('li');
    var innerContent = document.createTextNode(i);
    newNode.appendChild(innerContent);
    document.getElementById('sidebar').appendChild(newNode);
  }

  function refreshNavBar() {
    scrollPosition = $(window).scrollTop()
    if(scrollPosition >= $('#welcome').height()) {
      placeholderNavBar.css('display', 'block');
      navBar.addClass('fixed-nav-bar');
    } else {
      placeholderNavBar.css('display', 'none');
      navBar.removeClass('fixed-nav-bar');
    }

    scrollPosition = scrollPosition + $(window).height() / 10 + 80

    $(".active").removeClass('active')
    if (scrollPosition >= $("#apply").offset().top) {
      $(".apply.nav-button").addClass('active')
    } else if (scrollPosition >= $("#sponsors").offset().top) {
      $(".sponsors.nav-button").addClass('active')
    } else if (scrollPosition >= $('#faq').offset().top) {
      $(".faq.nav-button").addClass('active')
    } else if (scrollPosition >= $('#schedule').offset().top) {
      $(".schedule.nav-button").addClass('active')
    } else if (scrollPosition >= $('#about').offset().top) {
      $(".about.nav-button").addClass('active')
    }
  }

  function slideIn() {
    scrollPosition = $(window).scrollTop();
    scrollPosition = scrollPosition + $(window).height() / 10 + 80;
    if (scrollPosition >= $('#about').offset().top && !scrolledDown) {
      $("#background-left").animate({
        "margin-left" : "+=20vw"
      });
      $("#background-right").animate({
        "margin-left" : "-=20vw"
      });
      scrolledDown = true;
    }
  }

  $(window).scroll(function (event) {
    refreshNavBar();
    slideIn();
  });

  function setCollapsibility() {
    if ($(window).width() > 850) {
      $("#can-collapse").removeClass('navbar-collapsible-menu');
    } else {
      $("#can-collapse").addClass('navbar-collapsible-menu');
    }
  }

  // dynamically update line numbers
  $(window).resize(function(){

    setCollapsibility()

    // clear out line counts on resize
    var topNode = document.getElementById('sidebar');
    while(topNode.firstChild){
      topNode.removeChild(topNode.firstChild);
    }

    var firstNode = document.createElement('li');
    firstNode.id = 'linecount-start';
    firstNode.innerHTML = '&nbsp;';
    document.getElementById('sidebar').appendChild(firstNode);

    var faqHeight = $('#faq').height();
    var faqWidth = $('#faq').width();
    var lineHeight = $('#linecount-start').height();
    var lineCount = faqHeight/lineHeight;

    for(i = 1; i < lineCount; i++){
      var newNode = document.createElement('li');
      var innerContent = document.createTextNode(i);
      newNode.appendChild(innerContent);
      document.getElementById('sidebar').appendChild(newNode);
    }
  });
});
