let plusBtn = document.getElementsByClassName("btn-plus");
for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    console.log(plus.previousElementSibling.innerText)
    plus.previousElementSibling.innerText++;


    totalPrice();
  });
}
  let moinsBtn = document.getElementsByClassName('btn-moins');
for (let minus of moinsBtn) {
  minus.addEventListener('click', function () {
    if (minus.nextElementSibling.innerText > 0) {
      minus.nextElementSibling.innerText--;
    }
    totalPrice();
  });
} function totalPrice() {
    let productPrice = document.getElementsByClassName('prx');
    let productQuantity = document.getElementsByClassName('quantity');
    let sum = 0;
    for (let i = 0; i < productPrice.length; i++) {
      sum += productPrice[i].innerText * productQuantity[i].innerText;
    }
    document.getElementById('prix-total').innerText = sum;
  }
  
  
  let deleteBtn = document.querySelectorAll('.btn-delete');
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function () {
      deleteBtn[i].parentElement.parentElement.remove();
  
      
      totalPrice();
    });
  }
  let likeBtn = document.querySelectorAll('.btn-like');
  let heartIcon = document.querySelectorAll('.like');
  for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener('click', function () {
      if (heartIcon[i].style.fill === 'black') {
        heartIcon[i].style.fill = '#2da345';
      } else {
        heartIcon[i].style.fill = 'black';
      }
    });
  }   