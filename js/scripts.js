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
var jQueryIntroText = new Content("A software library is a software collection of items such as functions and objects. That's what jQuery is, a Java Script library. There are many functions and objects within this library and you can access them and use them to make your life easier, for instance jQuery is all about cross compatibility, lessen your struggle while supporting all major browsers. You can do a lot of things with HTML, CSS and Javascript much faster and easier with jQuery. Clean, readable code is alway nice too, with jQuery there is far less typing and code to sift through. The Java Script library known as jQuery will make your life much easier! Enjoy!", "jQueryIntroText");
//slides , only 1 will be initially injected.

//slide 1
var slide1Head = new Content("Linking pages to jQuery", "slideHeading");
var slide1Text = new Content(
  "First, before you use jQuery you must link your pages to a jQuery file so your calls to jQuery functions and events have something to reference. You can do this in two ways. First off, you could download jQuery, place it in the same directory as your pages and create a script tag in the head that references it, make sure that the jQuery script tag precedes any scripts that will refer to it. You can download jQuery <a href='https://jquery.com/download/' target='_blank'>(here).</a> For instance it should look something like this...<br><br><code>&lt;head&gt;<br>&emsp;&lt;script=&quot;js/jquery-3.3.1.min.js&quot;&gt;<br>&emsp;&lt;/script&gt;<br>&emsp;&lt;script=&quot;js/yourScript.js&quot;&gt;<br>&emsp;&lt;/script>&gt;<br>&lt;/head&gt;</code><br><br>You can also put your script at the end of the body, as long as the jQuery tag is above it. (although jQuery script tags themselves should go in the head.)<br><br>The second option is that you could add a script tag in the head of your page that uses a CDN or Content Delivery Network. This way you don't need to download the file. If that is what you want to do replace the first half of the jQuery script tag in the above example with one of these...<br><br>Google CDN:<br><br><code>&lt;script=&quot;js/https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js&quot;&gt;</code><br><br>Microsoft CDN:<br><br><code>&lt;script=&quot;js/https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js&quot;&gt;</code><br><br>Once you have a HTML file with the proper links you can start using jQuery to modify it. Click the right arrow below to go to the next lesson.", "slideContent"
);
//slide 2
var slide2Head = new Content("jQuery Syntax", "slideHeading");
var slide2Text = new Content(
  "The signature of jQuery code is the dollar sign $, it is what signals jQuery to come and help. A jQuery statement usually looks something like this...<br><br><code>$(&quot;selector&quot;).action();</code><br><br>To break this down even further it goes something like this...<br><br>#1) The $ sign signals or accesses jQuery.<br>#2) A selector &quot;gathers&quot; HTML elements.<br>#3) A jQuery action is performed on the selected elements.<br><br>Selectors can be tags such as p, div, ul, li etc. They can also be classes or id's such as .class or #id. You can even use the &quot;this&quot keyword as a selector to reference the current element. You'll learn more abour selectors and actions in the following slides but first...<br><br> Since jQuery is in located in the head of the document it is a good idea to encapsulate jQuery code in a special event. This follwing event prevents jQuery from running until all elements are loaded and the page is ready.<br><br><code>$(document).ready(function(){<br>&emsp;jQuery code goes here!!<br>}); </code><br><br>Now let's learn about jQuery event methods! Click the right arrow to continue or the left arrow to go back to previous lessons.", "slideContent"
);
//slide 3
var slide3Head = new Content("jQuery Event Methods", "slideHeading");
var slide3Text = new Content(
  "In jQuery event methods are how the user interacts with and triggers jQuery. If you're familar with events and event handlers in Java Script these are those. For instance there is a <code>click()</code> event method in jQuery that will make eventListeners for buttons and the like much easier. Here is an example of a event method in action...<br><br><code>//document ready event.<br>$(document).ready(function(){<br>&emsp;//calling a click event method on all divs.<br>&emsp;$(&quotdiv&quot).click(function(){<br>&emsp;&emsp;//Using the this selector to refer to the current element.<br>&emsp;&emsp;$(this).hide();<br>&emsp;});<br>});</code><br><br>This code will assign an event listener to all divs on the linked page. When a div is clicked on, the <code>hide()</code> event will take place on the <code>this</code> selection, which references the divs themselves. We'll learn more about the <code>hide()</code> method in the next tutorial. First we will learn about jQuery effects in general. To read more about jQuery event methods click <a href='https://api.jquery.com/category/events/' target=_blank>(here)</a>. Click the forward arrow to learn about jQuery effects.<br>Have fun!", "slideContent"
);
var slide4Head = new Content("jQuery Effects", "slideHeading");
var slide4Text = new Content(
  "Effects in jQuery change the way your page behaves and looks, it includes many things to transition elements in and out as well as support for animations and much more. To learn more about jQuery effects click <a href='https://api.jquery.com/category/effects/' target=_blank>(here)</a>. An example of a jQuery effect was mentioned previously, it is called <code>hide()</code> and it does just what it sounds like, it hides elements. Here is an example of how to use <code>hide()</code>. I encourage you to try it out on your own.<br><br>$(document).ready(function(){<br>&emsp;$(&quotdiv&quot).click(function(){<br>&emsp;&emsp;$(this).hide(500);<br>&emsp;});<br>});</code><br><br>This code says that when the document is loaded add an event listener which will hide all divs when they are clicked. The 500 which is a parameter to the <code>hide()</code> method represents how many milliseconds the animation will last. You can pass either milliseconds, fast or slow as a parameter to the hide function to control the speed of hiding. Many effects accept different parameters, take time experimenting and researching them all in the link provided earlier in the first paragraph. ", "slideContent"
);
var slide5Head = new Content("jQuery DOM Manipulation", "slideHeading");
var slide5Text = new Content("DOM stands for Document Object Model. It is a definition of how HTML documents are logically structured, accessed and manipulated. It is essentially an API for HTML, jQuery excels at making this easy! To learn more about DOM manipulation in jQuery click <a href='https://www.w3schools.com/jquery/jquery_dom_get.asp' target=_blank>(here)</a>. Now I will show you an example of a method which interacts with the DOM, it is known as <code>text()</code> and it can get or set the text content of HTML elements.<br><br><code>//This is how you get content from a HTML element.<br>var someText = $(&quot;#myText&quot;).text();<br><br>//This is how you set the text content of a HTML element.<br>$(&quot;myP&quot;).text(&quot;This text will be added to the #myP element.&quot;);</code><br><br>This is just the tip of the iceburg and there is much much more to learn. Have fun experimenting with jQuery!", "slideContent");
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