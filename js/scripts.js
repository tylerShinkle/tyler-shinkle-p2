//globals
//array to hold conent objects // consider adding namespace to eliminate globals.
var contentArray = [];
var loggedIn = false;
//end globals

//content object constructor
function Content(textContent, containerId) {
  this.textContent = textContent;
  this.containerId = containerId;
  this.generate = function(someContent) {
    var container = document.getElementById(containerId);
    container.textContent = "";
    var content = document.createTextNode(someContent);
    container.appendChild(content);
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
//push everything into an array.
contentArray.push(logo, loginOrName, welcome, siteIntroText, jQueryIntroHeading, jQueryIntroText);
//end creating objects and loading array

//page creation begins here
function init() {
  for (var i = 0; i < contentArray.length; i++) {
    generateContent(i);
  }
  //add event handlers support old IE
  //login link to trigger overlays
  var loginOrName = document.getElementById('loginOrName');
  if (loginOrName.addEventListener) {
    loginOrName.addEventListener('click', loginOrOut, false);
  } else {
    loginOrName.attachEvent('onclick', loginOrOut);
  }
  //exit button for login overlay
  var exitOverlay = document.getElementById('exitOverlay');
  if (exitOverlay.addEventListener) {
    exitOverlay.addEventListener('click', hideOverlay, false);
  } else {
    exitOverlay.attachEvent('onclick', hideOverlay);
  }
  //login button for overlays
  var loginButton = document.getElementById('loginButton');
  if (loginButton.addEventListener) {
    loginButton.addEventListener('click', login, false);
  } else {
    loginButton.attachEvent('onclick', login);
  }
  //logout button (logoutButton)

  //cancelButton

}
// end init

//load content into page.
function generateContent(index) {
  var container = document.getElementById(contentArray[index].containerId);
  var content = document.createTextNode(contentArray[index].textContent);
  container.appendChild(content);
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
    logout = document.getElementById('logoutOverlay');
    logout.style.display = "table";
  }
}
//end loginOrOut

//exit login overlay
function hideOverlay() {
  var overlay = document.getElementById('loginOverlay');
  var nav = document.getElementById('nav');
  var main = document.getElementById('main');
  var un = document.getElementById('userNameText');
  var pw = document.getElementById('pwText');
  main.style.display = "block";
  nav.style.display = "block";
  overlay.style.display = "none";
  //clear text fields of overlay
  pw.value = "";
  un.value = "";
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
    hideOverlay();
  } else {
    alert("Both the username and password must be between 5-10 characters. Thank you.");
  }
}


//start
init();
//