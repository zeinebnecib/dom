
  let qte = document.querySelectorAll('.quant');

let plus = Array.from(document.getElementsByClassName('fas fa-plus-square'));
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', function (e) {
      e.preventDefault()
    //   console.log(plus[i].previousElementSibling)
    qte[i].innerText++;
    
    totalPrice();
  });
}


let minus = document.getElementsByClassName('fas fa-minus-square');
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener('click', function (e) {
    e.preventDefault()
    if (minus[i].nextElementSibling.innerText > 0) {
      minus[i].nextElementSibling.innerText--;
    }
    
    totalPrice();
  });
}


function totalPrice() {
  let price = document.querySelectorAll('.price');
  let quantity = document.querySelectorAll('.quant');
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += price[i].innerHTML * quantity[i].innerHTML;
  }
  document.querySelector('.prixtotal').innerHTML = sum;
}


let x = Array.from(document.querySelectorAll('.fa-trash'));

x.forEach((el) =>
  el.addEventListener('click', function (e) {
    e.preventDefault()
    el.parentElement.parentElement.remove();
    totalPrice();
  })
);

let like = document.querySelectorAll('.fa-heart');
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener('click', function (e) {
    e.preventDefault()
    if (like[i].style.color === 'black') {
      like[i].style.color = 'red';
    } else {
      like[i].style.color = 'black';
    }
  });
}