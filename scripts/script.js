// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  if(localStorage.getItem("products")==null){
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => localStorage.setItem("products", JSON.stringify(data)));
  }
  var storedProducts = JSON.parse(localStorage.getItem("products"));  
  var productList = document.getElementById("product-list");

  if(localStorage.getItem("used")===null){
    localStorage.setItem("used", JSON.stringify([]));
  }
  var usedIds = JSON.parse(localStorage.getItem("used"));

  document.getElementById("cart-count").textContent = Number(usedIds.length);
  for(i in storedProducts){
    let curProduct = storedProducts[i];
    let p = document.createElement("product-item");
    p.setValues(curProduct, usedIds);
    productList.appendChild(p);
  }

});