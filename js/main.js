/*
PINE_SCHEDULE = {
  OPTIONALS: {
    "borders": true,
    "background_color": "#FFFFFF",
    "header_alignment": "center"
  },
  RANGE: {
    "start": 0.0,
    "end": 24.0
  },
  D1RANGE: {
    "start" : 12.0,
    "end" : 24.0
  },
  D2RANGE: {
    "start" : 0.0,
    "end" : 12.0
  }
};

PineSchedule.load(".day-1", {
  "optionals": PINE_SCHEDULE.OPTIONALS,
  "day_of_week": "SAT",
  "month": "OCT",
  "day": 3,
  "range": PINE_SCHEDULE.D1RANGE,
  "events": [
    {
      "time_range": "12pm-12am",
      "name": "HACKING!!!",
      "location": "Thayer School of Engineering",
      "color": "#8BB9B6",
      "start": 12.0,
      "end": 24.0
    },
  ]
});

PineSchedule.load(".day-2", {
  "optionals": PINE_SCHEDULE.OPTIONALS,
  "day_of_week": "SUN",
  "month": "OCT",
  "day": 4,
  "range": PINE_SCHEDULE.D2RANGE,
  "events": [
    {
      "time_range" : "12am-12pm",
      "name": "MOAR HACKING!!!",
      "location": "Thayer School of Engineering",
      "color": "#BFDC85",
      "start": 0.0,
      "end": 12.0
    },
  ]
});
*/

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
    /*
    case "s2":
      controlString = "#schedule";
      break;
    */
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
    } /*else if (scrollPosition >= $('#schedule').offset().top) {
      $(".schedule.nav-button").addClass('active')
    } */else if (scrollPosition >= $('#about').offset().top) {
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
