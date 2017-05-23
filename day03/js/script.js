// var myname= "Skye Reyes";
//
// //console.log(myname);
//
// // .length
// //console.log(myname.length);
//
// // .charat()
// //console.log(myname.charAt(11));
//
// // .indexof()
// //console.log(myname.indexOf('y'));
//
// // .concat()
// //console.log(myname.concat(' penoot'));
//
// // .substring()
// //console.log(myname.substring(4,8));
//
// // .substr()
// //console.log(myname.substr(0,3));
//
// // .toUpperCase()
// //console.log(myname.toUpperCase());

//.toLowerCase()
// //console.log(myname.toLowerCase());

var newuser='      yoda      '

// .trim()
// regular expressions
// //console.log(newuser.trim())

var sodas = ['Pepsi', 'Coke', 'Dr.Pepper'];
// //console.log(sodas[2]);
// //console.log(Array.isArray(sodas) );

var colors = ['blue', 'green', 'purple'];
var arrLength = colors.push('pink');
// //console.log("the new array is ", colors);
// //console.log("the array length is ", arrLength);

var arrLength = colors.unshift('black');
// //console.log("the new array", colors);
// //console.log("array length is", arrLength);


var item = colors.pop();
// //console.log("item is ", item);
//
// //console.log("the new array is", colors);
// //console.log("the length of the array is", colors.length);

item = colors.shift();
// //console.log("item is", item);
//
// //console.log("new array is", colors);
// //console.log("array length is", colors.length);

//console.log(colors);

//.indexOf()
//console.log(colors.indexOf('purple'));

//.lastIndexOf()
//console.log(colors.lastIndexOf('blue'));

//.splice() - remGreen or add
var removeItem = colors.splice(1, 2);
//console.log(colors);
//console.log(removeItem);

var addItems = colors.splice(1, 0, 'pink', 'red');
//console.log(colors);
//console.log(addItems)

var newColors=['red', 'orange', 'yellow', 'green', 'blue', 'purple']

var remGreen = newColors.splice(3,1,'indigo');
//console.log(newColors)
//console.log(remGreen)

//.slice() - up to but not including; does not modify original
var moreColors = newColors.slice(0, 3);
//console.log(moreColors)

//.reverse()
var revColors = newColors.reverse();
// console.log(newColors);
// console.log(revColors);

// .sort()
var names = ['Matt', 'matt', 'Skye', 'Ryan', 'ryan', 'skye'];
names.sort();
console.log(names);

// bubble sort
var points = [4, 2, 5, 1, 3];
points.sort(function(a, b) {
  return a-b;
});
// console.log(points)

//for loop
for(var i = 0; i < newColors.length; i++){
  // console.log(newColors[i]);
}

var modColors = newColors.map(function(e, i) {
  // console.log(e);
  // console.log('my fav color', e)
});
console.log(modColors);

var modPoints = points.map(function(e) {
  return e*2;
});
console.log(modPoints)
