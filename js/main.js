
PINE_SCHEDULE = {
  OPTIONALS: {
    "borders": true,
    "background_color": "#FFFFFF",
    "header_alignment": "center"
  },
  DAY_1_START: 11.0,
  DAY_2_START: 6.0,
  HOURS_TO_SHOW: 14,
};

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
      "time_range": "11am-12pm",
      "name": "Opening Ceremony",
      "location": "Location TBD",
      "color": "#E0CC5C",
      "start": 11.0,
      "end": 12.5
    },
    {
      "time_range": "12:30pm-1:30pm",
      "name": "Lunch and Team Formation",
      "location": "Location TBD",
      "color": "#B2D96D",
      "start": 12.5,
      "end": 13.5
    },
    {
      "time_range": "1:30pm",
      "name": "Hacking begins!",
      "color": "#8BB9B6",
      "start": 13.5,
      "end": 14.0
    },
    {
      "time_range": "6pm",
      "name": "Dinner",
      "location": "Location TBD",
      "color": "#B2D96D",
      "start": 18.0,
      "end": 19.0
    },
    {
      "time_range" : "12am-1am",
      "name": "Midnight Activity by Major League Hacking",
      "location": "Location TBD",
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
      "time_range": "8am-9:30am",
      "name": "Breakfast",
      "location": "Location TBD",
      "color": "#B2D96D",
      "start": 8.0,
      "end": 9.5
    },
    {
      "time_range": "10:30am",
      "name": "Project Submissions Due",
      "color": "#8BB9B6",
      "start": 10.5,
      "end": 11.0,
    },
    {
      "time_range": "11am-12pm",
      "name": "Project demos and First Round Judging",
      "location": "Location TBD",
      "color": "#8BB9B6",
      "start": 11.0,
      "end": 12.0,
    },
    {
      "time_range": "12pm-1pm",
      "name": "Lunch",
      "location": "Location TBD",
      "color": "#B2D96D",
      "start": 12.0,
      "end": 13.0
    },
    {
      "time_range": "1pm-3pm",
      "name": "Closing Ceremony",
      "location": "Location TBD",
      "color": "#E0CC5C",
      "start": 13.0,
      "end": 15.0
    },
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