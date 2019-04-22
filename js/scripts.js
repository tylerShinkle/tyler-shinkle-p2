//globals
//array to hold conent objects // consider adding namespace to eliminate globals.
var contentArray = [];
var loggedIn = false;
var slideStatus = 1;
//end globals

//content object constructor
function Content(textContent, containerId) {
  this.textContent = textContent;
  this.containerId = containerId;
  this.generate = function(someContent) {
    var loginOrName = document.getElementById('loginOrName');
    loginOrName.innerHTML = "";
    var container = document.getElementById(containerId);
    var content = document.createTextNode(someContent);
    container.appendChild(content);
  }
  this.generateSlide = function() {
    var container = document.getElementById(this.containerId);
    container.innerHTML = "";
    container.innerHTML = this.textContent;

  }
}
//end constructor

//create content objects with constructor
var logo = new Content("jQuery jumpstart", "logo");
var loginOrName = new Content("login", "loginOrName")
var welcome = new Content("Welcom to jQuery jumpstart!", "siteIntroHeading");
var siteIntroText = new Content("This site is intended to give you everything you need to start programming in jQuery provided you already know HTML, CSS and Java Script. It is not the end all be all to learning the language but more of a concise and effective way to start you off on experimenting with jQuery. Our 5 simple tutorials are on the bottom of the page. For more intensive tutorials and resources click one of the links below. Have fun!", "siteIntroText");
var jQueryIntroHeading = new Content("What is jQuery?", "jQueryIntroHeading");
var jQueryIntroText = new Content("A framework in regards to software development is essentially a library of code, but with added features that allow users to easily implement and interact with the items in the library. JQuery is a Java Script framework, it allows users to do certain things with HTML, CSS and Java Script much easier and faster than they'd be able to with just Java Script alone. To learn more click on the link below. We'll teach you how to get started in the tutorials near the bottom of the page. Enjoy!", "jQueryIntroText");
//slides , only 1 will be initially injected.

//slide 1
var slide1Head = new Content("Linking pages to jQuery", "slideHeading");
var slide1Text = new Content(
  "First, before you use jQuery you must link your pages to a jQuery file so your calls to jQuery functions and events have something to reference. You can do this in two ways. First off, you could download jQuery, place it in the same directory as your pages and create a script tag in the head that references it, make sure that the jQuery script tag precedes any scripts that will refer to it. For instance it should look something like this...<br><br>&lt;head&gt;<br>&emsp;&lt;script=&quot;js/jquery-3.3.1.min.js&quot;&gt;<br>&emsp;&lt;script=&quot;js/yourScript.js&quot;&gt;<br>&lt;/head&gt;<br><br>You can also put your script at the end of the body, as long as the jQuery tag is above it.<br><br>The second option is that you could add a script tag in the head of your page that uses a CDN or Content Delivery Network. This way you don't need to download the file. If that is what you want to do replace the jQuery script tag in the above example with one of these...<br><br>Google CDN:<br><br>&lt;script=&quot;js/https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js&quot;&gt;<br><br>Microsoft CDN:<br><br>&lt;script=&quot;js/https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js&quot;&gt;<br><br>Once you have a HTML file with the proper links you can start using jQuery to modify it. Click the right arrow below to go to the next lesson.", "slideContent"
);
//slide 2
var slide2Head = new Content("jQuery Syntax", "slideHeading");
var slide2Text = new Content("Syntax. Syntax.  Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax.  Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. Syntax. ", "slideContent");
var slide3Head = new Content("Selectors in jQuery", "slideHeading");
var slide3Text = new Content("selectors. selectors. selectors. selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors.  selectors. ", "slideContent");
var slide4Head = new Content("jQuery text()", "slideHeading");
var slide4Text = new Content("This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works. This is how text() works.", "slideContent");
var slide5Head = new Content("jQuery hide()", "slideHeading");
var slide5Text = new Content("This is how hide Works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works. This is how hide works.", "slideContent");
//push everything into an array.
contentArray.push(logo, loginOrName, welcome, siteIntroText, jQueryIntroHeading, jQueryIntroText, slide1Head, slide1Text);
//end creating objects and loading array

//page creation begins here
function init() {
  for (var i = 0; i < contentArray.length; i++) {
    generateContent(i);
  }
  //add event handlers support old IE
  //maybe...
  //make function that takes, id , function name and parameter
  // this will simplify things greatly. (callback functions)
  //do later if cant find solution in time for due date. (a function that adds event listeners with the parameters(id,event,function,parameters))
  //login link to trigger overlays.
  var loginOrName = document.getElementById('loginOrName');
  if (loginOrName.addEventListener) {
    loginOrName.addEventListener('click', loginOrOut, false);
  } else {
    loginOrName.attachEvent('onclick', loginOrOut);
  }
  //exit button for login overlay
  var exitOverlay = document.getElementById('exitOverlay');
  if (exitOverlay.addEventListener) {
    exitOverlay.addEventListener('click', function() {
      var direction = "in";
      hideOverlay(direction);
    }, false);
  } else {
    exitOverlay.attachEvent('onclick', function() {
      var direction = "in";
      hideOverlay(direction);
    });
  }
  //login button for overlays
  var loginButton = document.getElementById('loginButton');
  if (loginButton.addEventListener) {
    loginButton.addEventListener('click', login, false);
  } else {
    loginButton.attachEvent('onclick', login);
  }
  //logout button (logoutButton)
  var logoutButton = document.getElementById('logoutButton');
  if (logoutButton.addEventListener) {
    logoutButton.addEventListener('click', function() {
      direction = "out";
      hideOverlay(direction);
    }, false);
  } else {
    logoutButton.attachEvent('onclick', function() {
      direction = "out";
      hideOverlay(direction);
    })
  }
  //cancelButton on loginOrOut
  var cancelButton = document.getElementById('cancelButton');
  if (cancelButton.addEventListener) {
    cancelButton.addEventListener('click', function() {
      direction = "cancel";
      hideOverlay(direction);
    }, false);
  } else {
    cancelButton.attachEvent('onclick', function() {
      direction = "cancel";
      hideOverlay(direction);
    });
  }

  //slide function needs to know target.
  //forward
  var forward = document.getElementById('forward');
  if (forward.addEventListener) {
    forward.addEventListener('click', function(e) {
      changeSlide(e);
    }, false);
  } else {
    forward.attachEvent('onclick', function(e) {
      changeSlide(e);
    });
  }
  //back
  var back = document.getElementById('back');
  if (back.addEventListener) {
    back.addEventListener('click', function(e) {
      changeSlide(e);
    }, false);
  } else {
    back.attachEvent('onclick', function(e) {
      changeSlide(e);
    });
  }
}
// end init

//load content into page.
function generateContent(index) {
  var container = document.getElementById(contentArray[index].containerId);
  container.innerHTML = contentArray[index].textContent;
}
//end generate function

//function for login / name div. shows login overlay or logout overlay. (logged out will be changed by the login button on the overlay.)
function loginOrOut() {
  if (loggedIn == false) {
    var overlay = document.getElementById('loginOverlay');
    var nav = document.getElementById('nav');
    var main = document.getElementById('main');
    main.style.display = "none";
    nav.style.display = "none";
    overlay.style.display = "table";
  } else {
    //make window for logout and set its display here.
    var nav = document.getElementById('nav');
    var main = document.getElementById('main');
    main.style.display = "none";
    nav.style.display = "none";
    logout = document.getElementById('logoutOverlay');
    logout.style.display = "table";
  }
}
//end loginOrOut

//exit login / logout overlay
function hideOverlay(direction) {
  var nav = document.getElementById('nav');
  var main = document.getElementById('main');
  main.style.display = "block";
  nav.style.display = "block";
  if (direction == "in") {
    var overlay = document.getElementById('loginOverlay');
    var un = document.getElementById('userNameText');
    var pw = document.getElementById('pwText');
    overlay.style.display = "none";
    //clear text fields of overlay
    pw.value = "";
    un.value = "";
  } else if (direction == "out") {
    var logoutOverlay = document.getElementById('logoutOverlay');
    var loginOrName = document.getElementById('loginOrName');
    var loginText = document.createTextNode("login");
    loginOrName.innerHTML = "";
    loginOrName.appendChild(loginText);
    logoutOverlay.style.display = "none";
    loggedIn = false;
  } else if (direction == "cancel") {
    var logoutOverlay = document.getElementById('logoutOverlay');
    logoutOverlay.style.display = "none";
  } else {
    alert("something went wrong, please reload the page.")
  }
}

//login function
function login() {
  unEl = document.getElementById('userNameText');
  un = unEl.value;
  pwEl = document.getElementById('pwText');
  pw = pwEl.value;
  if ((un.length >= 5 && un.length <= 10) && (pw.length >= 5 && pw.length <= 10)) {
    loginOrName.generate(un);
    loggedIn = true;
    hideOverlay("in");
  } else {
    alert("Both the username and password must be between 5-10 characters. Thank you.");
  }
}

//changeSlide
//not the best but a switch statement is needed to meet project requirements.
function changeSlide(e) {
  var target = getTarget(e);
  if (target.id == "forward") {
    if (slideStatus >= 5) {
      return;
    } else {
      slideStatus++;
      generateSlide(slideStatus);
    }
  } else {
    if (slideStatus <= 1) {
      return;
    } else {
      slideStatus--;
      generateSlide(slideStatus);
    }
  }
}

//getTarget
function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

//generateSlide
//not the best option but the project requires a switch statement.
function generateSlide(slideState) {
  switch (slideState) {
    case 1:
      slide1Head.generateSlide();
      slide1Text.generateSlide();
      break;
    case 2:
      slide2Head.generateSlide();
      slide2Text.generateSlide();
      break;
    case 3:
      slide3Head.generateSlide();
      slide3Text.generateSlide();
      break;
    case 4:
      slide4Head.generateSlide();
      slide4Text.generateSlide();
      break;
    case 5:
      slide5Head.generateSlide();
      slide5Text.generateSlide();
      break;
    default:
      alert("something is wrong, refresh site.");
  }
}


//start
init();
//