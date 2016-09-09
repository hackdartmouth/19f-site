PINE_SCHEDULE = {
  OPTIONALS: {
    "borders": true,
    "background_color": "#FFFFFF",
    "header_alignment": "center"
  },
  DAY_1_START: 8.0,
  DAY_2_START: 8.0,
  HOURS_TO_SHOW: 13,
};


PineSchedule.load(".day-1", {
  "optionals": PINE_SCHEDULE.OPTIONALS,
  "day_of_week": "SATURDAY",
  "month": "September",
  "day": 24,
  "range": {
    "start": PINE_SCHEDULE.DAY_1_START,
    "end": PINE_SCHEDULE.DAY_1_START + PINE_SCHEDULE.HOURS_TO_SHOW
  },
  "events": [
    {
      "time_range": "12:00pm-1:30pm",
      "name": "Registration",
      "location": "Glycofi Atrium for sponsors, Cook Auditorium for participants",
      "color": "#8BB9B6",
      "start": 12.0,
      "end": 13.5
    },
    {
      "time_range": "1:30pm-2:00pm",
      "name": "Opening Ceremony",
      "location": "Cook Auditorium",
      "color": "#E6F176",
      "start": 13.5,
      "end": 14.0
    },
    {
      "time_range": "2pm",
      "name": "Hacking Begins, Lunch",
      "location": "Glycofi Atrium",
      "color": "#B2D96D",
      "start": 14.0,
      "end": 14.5
    },
    {
      "time_range": "2:30pm",
      "name": "Workshop: Thayer School - Sensors and Actuators on Arduino and Pi",
      "location": "TBA",
      "color": "#E6F176",
      "start": 14.5,
      "end": 15.5
    },
    {
      "time_range": "3:30pm",
      "name": "Workshop: Intralinks - Introduction to APIs",
      "location": "TBA",
      "color": "#E6F176",
      "start": 15.5,
      "end": 16
    },
    {
      "time_range": "4:00pm",
      "name": "Workshop: WebDev - Introduction to HTML/CSS with Bootstrap",
      "location": "TBA",
      "color": "#E6F176",
      "start": 16,
      "end": 16.5
    },
    {
      "time_range": "4:30pm",
      "name": "Workshop: Appian - ReactJS",
      "location": "TBA",
      "color": "#E6F176",
      "start": 16.5,
      "end": 17
    },
    {
      "time_range": "7pm-8pm",
      "name": "Dinner",
      "location": "Glycofi Atrium",
      "color": "#B2D96D",
      "start": 19.0,
      "end": 20.0
    }
  ]
});

PineSchedule.load(".day-2", {
  "optionals": PINE_SCHEDULE.OPTIONALS,
  "day_of_week": "SUNDAY",
  "month": "SEPTEMBER",
  "day": 25,
  "range": {
    "start": PINE_SCHEDULE.DAY_2_START,
    "end": PINE_SCHEDULE.DAY_2_START + PINE_SCHEDULE.HOURS_TO_SHOW
  },
  "events": [
  {
      "time_range": "8am",
      "name": "Breakfast",
      "location": "Glycofi Atrium",
      "color": "#B2D96D",
      "start": 8.0,
      "end":10.0
    },
    {
      "time_range": "12pm-1pm",
      "name": "Lunch",
      "location": "Glycofi Atrium",
      "color": "#B2D96D",
      "start": 12.0,
      "end": 13.0
    },
    {
      "time_range": "2pm-3:30pm",
      "name": "Demos + First-Round Judging",
      "location": "Glycofi Atrium",
      "color": "#D7766B",
      "start": 14.0,
      "end": 15.5
    },
    {

      "time_range": "3:30pm-4:30pm",
      "name": "Closing Ceremony",
      "location": "Cook auditorium",
      "color": "#8BB9B6",
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

  //$('#schedule').hide();
  //$('#apply').hide();

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
