import products from "./products.json" assert {type: 'json'};

let output = ''

for(let item of products) {
  output += `
  <div class="products">
    <img src="${item.image}" alt="">
    <h2 class="product_name">${item.name}</h2>
    <h4 class="price">${item.price}</h4>
    <button>Add to Cart</button>
  </div>
  `
}

document.querySelector(".container").innerHTML = output