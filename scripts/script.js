// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  if(localStorage.getItem("products")==null){
    console.log("gere");
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("products", JSON.stringify(data))})
      .then(data => this.called());
  }else{
    called();
  }
});

function called(){
  var storedProducts = JSON.parse(localStorage.getItem("products"));
  
  var productList = document.getElementById("product-list");

  if(localStorage.getItem("used")==null){
    var usedIds = [];
    localStorage.setItem("used", JSON.stringify(usedIds));
  }
  var usedIds = JSON.parse(localStorage.getItem("used"));
  console.log(usedIds);

  console.log(storedProducts);
  document.getElementById("cart-count").textContent = Number(usedIds.length);
  for(i in storedProducts){
    let curProduct = storedProducts[i];
    let p = document.createElement("product-item");
    p.setValues(curProduct);
    productList.appendChild(p);
  }
}