var usernameArray = [];
var usernames = '';


function getUser() {
  var usernames = prompt('Please enter another username');
  usernameArray.push(usernames);
  console.log(usernameArray)
}

function removeUser() {
  usernameArray.pop();
  console.log(usernameArray);
}
