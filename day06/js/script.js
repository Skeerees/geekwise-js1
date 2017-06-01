/*firstname();

console.log(myname);
var myname = 'Skye';

function firstname() {
  alert('My first name')
}

lastname();
var lastname = function() {
  alert('My last name')
};*/

/*  alert(getNum())
}

function getNum() {
    return Math.floor(Math.random() * 11);
}*/

// var fullName = '';
//
// function getName() {
//   var user = prompt('Enter a Username please.');
//   alertName(getMore(properCap(user)));
// }
// getName();
//
// function properCap(str1) {
//   return str1 = str1.charAt(0).toUpperCase() + str1.substr(1).toLowerCase();
// }
//
// function getMore(str2) {
//   fullName += `${str2} `;
//   if(confirm('Any more?')){
//     getName();
//   }else {
//     return fullName;
//   }
// }
//
// function alertName(str3) {
//   alert(str3);
// }

//targeting DOM elements

var myH1 = document.getElementById('hdr1');
var myP = document.getElementsByTagName('p')[0];


console.log(myH1);
console.log(myP);

myH1.addEventListener('click', function () {
  // myH1.style.color = 'purple';
  // myH1.style.margin = '0 auto';
  // myH1.style.fontSize = '100px';
  // myH1.style.backgroundColor = 'pink';
  // myH1.style.textAlign = 'center';
  // myH1.style.border = 'black dotted 3px';
  // myH1.style.borderRadius = '20px';
  //
  // myP.style.color = 'purple';
  // myP.style.marginTop = '-3px';
  // myP.style.backgroundColor = 'pink';
  // myP.style.textAlign = 'center';
  // myP.style.border = 'black dotted 3px';
  // myP.style.borderRadius = '20px';

  myP.classList.toggle('red');
  console.log(this);
});
