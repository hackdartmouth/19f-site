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
  "day_of_week": "FRIDAY",
  "month": "APRIL",
  "day": 15,
  "range": {
    "start": PINE_SCHEDULE.DAY_1_START,
    "end": PINE_SCHEDULE.DAY_1_START + PINE_SCHEDULE.HOURS_TO_SHOW
  },
  "events": [
    {
      "time_range": "4:45pm",
      "name": "Pizza",
      "color": "#B2D96D",
      "start": 16.5,
      "end": 17.0
    },
    {
      "time_range": "5-6pm",
      "name": "Tech Panel",
      "location": "DEN",
      "color": "#E6F176",
      "start": 17.0,
      "end": 18.0
    },
    {
      "time_range": "6-7pm",
      "name": "HTML/CSS Workshop",
      "location": "DEN",
      "color": "#E6F176",
      "start": 18.0,
      "end": 19.0
    },
    {
      "time_range": "7-8pm",
      "name": "Building Bots Workshop",
      "location": "DEN",
      "color": "#E6F176",
      "start": 19.0,
      "end": 20.0
    }
  ]
});

PineSchedule.load(".day-2", {
  "optionals": PINE_SCHEDULE.OPTIONALS,
  "day_of_week": "SATURDAY",
  "month": "APRIL",
  "day": 16,
  "range": {
    "start": PINE_SCHEDULE.DAY_2_START,
    "end": PINE_SCHEDULE.DAY_2_START + PINE_SCHEDULE.HOURS_TO_SHOW
  },
  "events": [
  {
      "time_range": "8am",
      "name": "Registration Begins and Continues Throughout the Day",
      "location": "DEN - 4 Currier Place",
      "color": "#8BB9B6",
      "start": 8.0,
      "end":9.0
    },
    {
      "time_range": "9am",
      "name": "Breakfast (Lou's)",
      "location": "DEN",
      "color": "#B2D96D",
      "start": 9.0,
      "end": 10.0
    },
    {
      "name": "Hacking!",
      "location": "DEN",
      "color": "#D7766B",
      "start": 10.0,
      "end": 12.0
    },
    {
      "time_range": "12-1pm",
      "name": "Lunch (Gas Station Chinese)",
      "location": "DEN",
      "color": "#B2D96D",
      "start": 12.0,
      "end": 13.0
    },
    {
      "name": "Hacking!",
      "location": "DEN",
      "color": "#D7766B",
      "start": 13.0,
      "end": 19.0
    },
    {
      "time_range": "7pm",
      "name": "Dinner (Boloco)",
      "location": "DEN",
      "color": "#B2D96D",
      "start": 19.0,
      "end": 20.0
    },
    {
      "time_range": "8pm",
      "name": "Judging and Prizes",
      "location": "DEN",
      "color": "#E0CC5C",
      "start": 20.0,
      "end": 21.0
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

  $('#apply').hide();

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
