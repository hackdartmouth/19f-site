PINE_SCHEDULE = {
  OPTIONALS: {
    "borders": true,
    "background_color": "#FFFFFF",
    "header_alignment": "center"
  },
  DAY_0_START: 9,
  DAY_1_START: 0,
  HOURS_TO_SHOW: 16.5,

};

PineSchedule.load(".day-0", {
  "optionals": PINE_SCHEDULE.OPTIONALS,
  "day_of_week": "SATURDAY",
  "month": "APRIL",
  "day": 6,
  "range": {
    "start": PINE_SCHEDULE.DAY_0_START,
    "end": PINE_SCHEDULE.DAY_0_START + 15
  },
  "events": [
    {
      "time_range": "9am-11am",
      "name": "Check-in",
      "location": "Sponsors: Glycofi Atrium; Participants: Cook Auditorium",
      "color": "#D7E9BB",
      "start": 9,
      "end": 11
    },
    {
      "time_range": "11am-11:30am",
      "name": "Opening Ceremony",
      "location": "Zaleski Auditorium",
      "color": "#91AB61",
      "start": 11,
      "end": 11.5
    },
    {
      "time_range": "11:30am-12pm",
      "name": "Team Formation",
      "location": "Glycofi Auditorium",
      "color": "#CEE190",
      "start": 11.5,
      "end": 12
    },
    {
      "time_range": "12pm-1pm",
      "name": "Hacking Begins; Lunch (sponsored by Facebook)",
      "location": "Glycofi Atrium",
      "color": "#D7E9BB",
      "start": 12,
      "end": 13
    },
    {
      "time_range": "1pm-2pm",
      "name": "Intralinks Workshop: TBD",
      "location": "Zaleski Auditorium",
      "color": "#91AB61",
      "start": 13,
      "end": 14
    },
    {
      "time_range": "2pm-3pm",
      "name": "Wayfair Workshop: TBD",
      "location": "Zaleski Auditorium",
      "color": "#CEE190",
      "start": 14,
      "end": 15
    },
    {
      "time_range": "3pm-4pm",
      "name": "Appian Workshop: React Native",
      "location": "Zaleski Auditorium",
      "color": "#D7E9BB",
      "start": 15,
      "end": 16
    },
    {
      "time_range": "4pm-4:30pm",
      "name": "Bioinformatics Workshop",
      "location": "Zaleski Auditorium",
      "color": "#91AB61",
      "start": 16,
      "end": 16.5
    },
    {
      "time_range": "4:30pm-5pm",
      "name": "Microsoft Workshop: TBD",
      "location": "Zaleski Auditorium",
      "color": "#CEE190",
      "start": 16.5,
      "end": 17
    },
    {
      "time_range": "5pm-6pm",
      "name": "Facebook Workshop: TBD",
      "location": "Zaleski Auditorium",
      "color": "#D7E9BB",
      "start": 17,
      "end": 18
    },
    {
      "time_range": "6pm-7pm",
      "name": "Dinner",
      "location": "Glycofi Atrium",
      "color": "#91AB61",
      "start": 18,
      "end": 19
    },
    {
      "time_range": "7:30pm-9pm",
      "name": "Office Hours",
      "location": "Couch Lab, Spanos Auditorium",
      "color": "#CEE190",
      "start": 19.5,
      "end": 21
    },
    {
      "time_range": "11pm-12am",
      "name": "Raffle",
      "location": "Cummings Great Hall",
      "color": "#CEE190",
      "start": 23,
      "end": 24
    }
  ]
});

PineSchedule.load(".day-1", {
  "optionals": PINE_SCHEDULE.OPTIONALS,
  "day_of_week": "SUNDAY",
  "month": "APRIL",
  "day": 7,
  "range": {
    "start": PINE_SCHEDULE.DAY_1_START,
    "end": PINE_SCHEDULE.DAY_1_START + PINE_SCHEDULE.HOURS_TO_SHOW
  },
  "events": [
    {
      "time_range": "12am-1am",
      "name": "Midnight Activity",
      "location": "Glycofi Atrium",
      "color": "#CEE190",
      "start": 0,
      "end": 1
    },
    {
      "time_range": "7am-8am",
      "name": "Breakfast",
      "location": "Glycofi Atrium",
      "color": "#91AB61",
      "start": 7,
      "end": 8
    },
    {
      "time_range": "11am-12pm",
      "name": "Lunch (sponsored by Intralinks)",
      "location": "Glycofi Atrium",
      "color": "#D7E9BB",
      "start": 11,
      "end": 12
    },
    {
      "time_range": "12pm-12:30pm",
      "name": "Submissions due",
      "location": "Glycofi Atrium",
      "color": "#CEE190",
      "start": 12,
      "end": 12.5
    },
    {
      "time_range": "4:15-5pm",
      "name": "Introduce Judges, Demos, First-Round Judging",
      "location": "Glycofi Atrium",
      "color": "#91AB61",
      "start": 12.5,
      "end": 14,
    },
    {
      "time_range": "2pm-3pm",
      "name": "Closing Ceremony",
      "location": "Zaleski Auditorium",
      "color": "#D7E9BB",
      "start": 14,
      "end": 15
    },
    {
      "time_range": "4pm-4:30pm",
      "name": "Buses depart from Hanover",
      "location": "Hop",
      "color": "#CEE190",
      "start": 16,
      "end": 16.5,
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
      controlString = "#tracks";
      break;
    case "s5":
      controlString = "#sponsors";
      break;
    case "s6":
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
  	//console.log("refreshed Navbar");
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
    }  else if (scrollPosition >= $('#faq').offset().top) {
    	//console.log("made faq active");
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
