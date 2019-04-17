//content object constructor
function Content(textContent, containerId) {
  this.textContent = textContent;
  this.containerId = containerId;
}
//array to hold conent objects
var contentArray = [];
//create content objects with constructor
var logo = new Content("jQuery jumpstart", "logo");
var loginOrName = new Content("login", "loginOrName")
//push everything into an array.
contentArray.push(logo, loginOrName);

//page creation begins here
function init() {
  for (var i = 0; i < contentArray.length; i++) {
    generateContent(i);
  }
}

//load content into page.
function generateContent(index) {
  var container = document.getElementById(contentArray[index].containerId);
  var content = document.createTextNode(contentArray[index].textContent);
  container.appendChild(content);
}

//start
init();