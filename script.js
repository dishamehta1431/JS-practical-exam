let products = [
  {
    id: 1,
    name: "Lipstick",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Makeup Brush",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Foundation",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1599733589046-10c005739ef9?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Perfume",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop",
  },
  {
    id: 5,
    name: "Skincare Cream",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Face Serum",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop",
  },
  {
    id: 7,
    name: "Eyeshadow Palette",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop",
  },
  {
    id: 8,
    name: "Nail Polish",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&h=600&fit=crop",
  },
  {
    id: 9,
    name: "Face Makeup",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop",
  },
  {
    id: 10,
    name: "Cosmetic Products",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop",
  },
  {
    id: 11,
    name: "Beauty Products",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=600&fit=crop",
  },
  {
    id: 12,
    name: "Makeup Kit",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop",
  },
];

let LocalCartItem = JSON.parse(localStorage.getItem("localCart")) || [];

function displayData() {
  const productList = document.getElementById("product-list");

  productList.innerHTML = "";

  products.forEach((p) => {
    productList.innerHTML += `
        
        <div class="col-md-4 p-3">
        <div class="card product-card" >
  <img src="${p.image}" class="card-img-top" alt="${p.name}">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text">${p.price}</p>
<div class="d-flex gap-1">
    <button class="btn btn-primary" onclick="addToCart(${p.id})" >add card</button>
    <button class="btn btn-warning" onclick="updateProduct(${p.id})" >update</button>
    <button class="btn btn-danger" onclick="deleteProduct(${p.id})" >Delete</button>
</div>
  </div>
</div>
        
        </div>

        `;
  });
}

displayData();

function addToCart(id) {
  try {
    let productItem = LocalCartItem.find((p) => p.id === id);

    if (productItem) {
      let productQty = productItem.qty++;

      console.log("qty", productQty);
    } else {
      productItem = products.find((p) => p.id === id);

      LocalCartItem.push({ ...productItem, qty: 1 });
    }

    updateLocalStorage();
    alert("product added");
  } catch (error) {
    console.log(error);
  }
}

function updateLocalStorage() {
  localStorage.setItem("localCart", JSON.stringify(LocalCartItem));

  displayCartData();

  finalTotal();
}

function displayCartModal() {
  const cartModal = document.getElementById("cartModal");

  const modal = new bootstrap.Modal(cartModal);

  modal.show();

  displayCartData();
  finalTotal();
}

function displayCartData() {
  const tableBody = document.getElementById("table-body");

  tableBody.innerHTML = "";

  LocalCartItem.forEach((p, index) => {
    tableBody.innerHTML += `
    
    <tr key={index}>
    <td>${index + 1}</td>
    <td><img class=cartProductImage src=${p.image}  alt=${p.name} ></td>
    <td>${p.name}</td>
    <td>${p.price}</td>
    <td>
    <div class="d-flex justify-content-center align-items-center gap-2"   >
    <button  class="btn btn-success" onClick="incQty(${p.id})" >+</button>
    <h5>${p.qty}</h5>
     <button  class="btn btn-warning" onClick="decQty(${p.id})" >-</button>
    </div>
    </td>
    <td>
    <h5>₹${p.qty * p.price} </h5>
    </td>
    <td>
    <button class="btn btn-danger"  onClick="removePro(${p.id})" > Remove</button>
    </td>
    </tr>
    `;
  });
}

function incQty(id) {
  try {
    const product = LocalCartItem.find((p) => p.id === id);

    if (product) {
      product.qty++;
    }

    updateLocalStorage();
  } catch (error) {
    console.log(error);
  }
}

function decQty(id) {
  try {
    const index = LocalCartItem.findIndex((p) => p.id === id);

    if (index === -1) {
      throw new Error("product not found");
    }

    const product = LocalCartItem.find((p) => p.id === id);

    if (product) {
      product.qty--;
    }

    if (product.qty === 0) {
      LocalCartItem.splice(index, 1);
    }

    updateLocalStorage();
  } catch (error) {
    console.log(error);
  }
}

function removePro(id) {
  try {
    LocalCartItem = LocalCartItem.filter((p) => p.id !== id);
    updateLocalStorage();
  } catch (error) {
    console.log(error);
  }
}

function finalTotal() {
  const total = document.getElementById("finalTotal");

  total.innerHTML = "";

  const totalAmounts = LocalCartItem.reduce((acc, curr) => {
    return (acc += curr.price * curr.qty);
  }, 0);

  total.innerHTML = `<h5> ₹${totalAmounts}</h5>`;
}

function checkOut() {
  try {
    if (LocalCartItem.length === 0) {
      alert("add item in cart");
    } else {
      LocalCartItem = [];

      alert("your order placed successfully");

      updateLocalStorage();

      const cartModal = document.getElementById("cartModal");

      let modal = bootstrap.Modal.getInstance(cartModal);

      if (modal) {
        modal.hide();
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function displayAddProductModal() {
  const addProductModal = document.getElementById("addPro");

  const modal = new bootstrap.Modal(addProductModal);

  modal.show();
}

function addPro() {
  const productName = document.getElementById("productName").value.trim();
  const productImage = document.getElementById("productImage").value.trim();
  const productPrice = document.getElementById("productPrice").value.trim();

  if (!productName || !productImage || !productPrice) {
    alert("please add all product details");
  }

  const newProduct = {
    id: new Date().getTime(),
    name: productName,
    price: productPrice,
    image: productImage,
  };

  console.log("new", newProduct);

  products.push(newProduct);

  updateLocalStorage();

  console.log("products", products);

  alert("new product added successfully");

  displayData();
}

function deleteProduct(id) {
  const product = products.find((p) => p.id === id);

  if (!product) {
    throw new Error("failed to delete product");
  }

  alert("product deleted successfully");

  products = products.filter((p) => p.id !== id);

  displayData();
}

function updateProduct(id) {
  const updateModal = document.getElementById("updateProduct");

  const modal = new bootstrap.Modal(updateModal);

  modal.show();

  const product = products.find((p) => p.id === id);

  if (!product) {
    alert("product not found");
  }

  document.getElementById("updateProductName").value = product.name;
  document.getElementById("updateProductImage").value = product.image;
  document.getElementById("updateProductPrice").value = product.price;

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    alert("product not found");
  }

  const form = document.getElementById("updateProductForm");

  form.onsubmit = function (e) {
    e.preventDefault();

    let newName = document.getElementById("updateProductName").value.trim();

    let newImage = document.getElementById("updateProductImage").value.trim();

    let newPrice = document.getElementById("updateProductPrice").value.trim();

    products[index] = {
      ...products[index],
      name: newName,
      price: newPrice,
      image: newImage,
    };

    alert("product detail updated...");

    modal.hide();

    displayData();
  };
}
