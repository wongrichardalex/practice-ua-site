/*
Practice JS file
*/

document.querySelector('h1').onclick = function() {
    alert('Sorry, not a link!');
}

var myHeading = document.querySelector('h1');
myHeading.textContent = 'The University of Arizona: Go Wildcats!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ua-logo.png') {
      myImage.setAttribute ('src','images/wildcat.jpg');
    } else {
      myImage.setAttribute ('src','images/ua-logo.png');
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
	} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to UA, ' + storedName;
	}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to UA, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');