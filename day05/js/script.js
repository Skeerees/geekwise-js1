//if

//== equal to
//===strict equal to
/*
var age = parseInt( prompt('What is your age?'));
var gender = prompt('Male or female?')
// var age;
if(age > 21 && gender == 'female'){
  console.log('Welcome!');
}else if(age < 21){
  console.log('bye bitch');
}else if(age == 21){
  console.log('ok fine');
}

if(!age){
  console.log('i asked u a damn question')
}
*/

/*
switch statement
var today = new Date().getDay();
console.log(today)

switch('monday'){
  case 0:
    console.log('prepare ur anus');
    break;
  case 1:
    console.log('fuck my life');
    break;
  default:
    console.log('i still hate life')
}
*/

//ternary operator
/*
var age = prompt('What is your age?');

age >= 21 ? console.log('b o o z e') : console.log('bye bitch');
*/

/*
var myname = 'Skye';
console.log(myname);

let middlename = 'Elizabeth'
console.log(middlename);

const lastname = 'Reyes'
console.log(lastname);

var dog = 2;
if(dog > 1){
  let dogyears = 7;
  console.log(dogyears * dog)
}
*/

//JavaScript functions
/*
//function declaration
function myName(name, age){ //<-- parameters
  // alert(name + ' is ' + age + ' years a bitch');
  alert( `${name} is ${age} years a bitch`) // <-- better way
}

myName('BO$$ A$$ B!TCH', 16); // <-- arguments go here


//function expressions
var myCar = function(car, year){
  alert( `I have a ${car}, model ${year}`)
}('badass honda minivan', 2006);
// myCar();
*/
// var fname = prompt('What is your first name?');
// var lname = prompt('What is your last name?');

function welcome(){
  var msg = 'Welcome';
  for(var arg of arguments){
    msg += ' ' + arg;
  }
  alert(msg );
}
// welcome('Skye', 'Elizabeth', 'Mari', 'Potter', 'Reyes' );

/*HOMEWORK
click button
first name prompt
save and account for extra spaces
first character capped
remaining characters lowercase
pass into another function
alert welcome

minimum 2 functions!!!
*/
