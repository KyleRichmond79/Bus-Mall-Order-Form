'use strict';

var orderForm = document.getElementById('orderForm');
var customerArray = [];
var ordersArray = [];

function CustomerConstructor(firstName, lastName, shippingAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.shippingAddress = shippingAddress;
  customerArray.push(this);
}

if(localStorage.data) {
  allProds = JSON.parse(localStorage.data);
} else {
  new TestProd('bag', 'imgs/bag.jpg');
  new TestProd('banana', 'imgs/banana.jpg');
  new TestProd('bathroom', 'imgs/bathroom.jpg');
  new TestProd('boots', 'imgs/boots.jpg');
  new TestProd('breakfast', 'imgs/breakfast.jpg');
  new TestProd('bubblegum', 'imgs/bubblegum.jpg');
  new TestProd('chair', 'imgs/chair.jpg');
  new TestProd('cthulhu', 'imgs/cthulhu.jpg');
  new TestProd('dog-duck', 'imgs/dog-duck.jpg');
  new TestProd('dragon', 'imgs/dragon.jpg');
  new TestProd('pen', 'imgs/pen.jpg');
  new TestProd('pet-sweep', 'imgs/pet-sweep.jpg');
  new TestProd('scissors', 'imgs/scissors.jpg');
  new TestProd('shark', 'imgs/shark.jpg');
  new TestProd('sweep', 'imgs/sweep.png');
  new TestProd('tauntaun', 'imgs/tauntaun.jpg');
  new TestProd('unicorn', 'imgs/unicorn.jpg');
  new TestProd('usb', 'imgs/usb.gif');
  new TestProd('water-can', 'imgs/water-can.jpg');
  new TestProd('wine -glass', 'imgs/wine-glass.jpg');
}

function processForm(e) {
// push product into ordersArray which will be set into local storage
  if (e.preventDefault) e.preventDefault();
  return false;
}

var form = document.getElementById('payment');
if (form.attachEvent) {
  form.attachEvent('submit', processForm);
} else {
  form.addEventListener('submit', processForm);
}
