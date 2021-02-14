// product-item.js
var used = JSON.parse(localStorage.getItem("used"));
class ProductItem extends HTMLElement {
  // TODO
  constructor(){

    const template = document.createElement('template');
    template.innerHTML = 
    `<style>      
    .price{
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
      max-height:100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }</style>
    <li class="product">
    <img src="" alt="" width=200>
    <p class="title"></p>
    <p class="price"></p>
    <button id="" onclick="clickFunction(this)"></button>
    </li>`;

    super();
    
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
  }

  setValues(newProduct){
    let shadow = this.shadowRoot;
    let productItem = shadow.lastChild;
    productItem.querySelector(".title").textContent = newProduct.title;
    productItem.querySelector(".price").textContent = "$"+newProduct.price;
    productItem.querySelector("img").src = newProduct.image;
    productItem.querySelector("img").alt =newProduct.title;
    productItem.querySelector("button").id =newProduct.id;
    if(!used.includes(String(newProduct.id))){
      productItem.querySelector("button").innerHTML = "Add to Cart";
    }else{
      productItem.querySelector("button").innerHTML = "Remove from Cart";
    }
  }

}

customElements.define('product-item', ProductItem);

function clickFunction(curButton){
  if(curButton.innerHTML == "Add to Cart"){
    alert('Added to Cart!');
    document.getElementById("cart-count").textContent = Number(document.getElementById("cart-count").textContent)+1;
    curButton.innerHTML = "Remove from Cart";
    used.push(curButton.id);
    localStorage.setItem("used", JSON.stringify(used));
  }
  else{
    document.getElementById("cart-count").textContent = Number(document.getElementById("cart-count").textContent)-1;
    curButton.innerHTML = "Add to Cart";
    const index = used.indexOf(curButton.id);
    if(index>-1){
      used.splice(index,1);
    }
    localStorage.setItem("used", JSON.stringify(used));
  }
}
