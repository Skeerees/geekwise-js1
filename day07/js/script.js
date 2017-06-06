// var btn = document.querySelector('button');
// var nav = document.querySelector('ul')
// btn.addEventListener('click', function(evt) {
//   // console.log(this);
//   // console.log(evt.target.innerText);
// });
//
// //mouseenter
// btn.addEventListener('mouseenter', function (evt) {
//   console.log(evt);
//   evt.target.style.color = 'pink'
// })

//mouseleave
// btn.addEventListener('mouseleave', function (evt) {
//   console.log(evt);
//   evt.target.style.color = 'purple'
// })
//
// //scroll
// window.addEventListener('scroll', function (evt) {
//   console.clear()
//   console.log(evt.pageY);
//   if (evt.pageY > 57) {
//     nav.classList.add('vis')
//   }else {
//     nav.classList.remove('vis')
//   }
// });

//keydown, keyup, keypress
//
// var setDiv = document.querySelector('div#set');
// setDiv.innerHTML = 'Here is a line';
//
// var getDiv = document.querySelector('div#get')
// console.log(getDiv.innerHTML);

var subBtn = document.querySelector('input[type="submit"]');
var inputBox = document.querySelector('input[type="text"]');
subBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  console.log(inputBox.value);
})

//second input box
//both values
//alert results
