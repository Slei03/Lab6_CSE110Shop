// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => localStorage.setItem("products", JSON.stringify(data)));

  var storedProducts = JSON.parse(localStorage.getItem("products"));  
  var productList = document.getElementById("product-list");

  for(i in storedProducts){
    let curProduct = storedProducts[i];
    let p = document.createElement("product-item");
    p.setValues(curProduct);
    productList.appendChild(p);
  }
  

});