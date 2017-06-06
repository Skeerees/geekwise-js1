var firstBtn = document.getElementById('firstBtn');
var secondBtn = document.getElementsByTagName('button')[1];
var thirdBtn = document.querySelector('li:last-child button');

function properCap(str) {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

var fullName = '';

firstBtn.addEventListener('click', function() {
  fullName += properCap(prompt('Get first name')) + ' ';
});

secondBtn.addEventListener('click', function() {
  fullName += properCap(prompt('Get middle name')) + ' ';
});

thirdBtn.addEventListener('click', function() {
  fullName += properCap(prompt('Get last name')) + ' ';
  alert(fullName)
});
