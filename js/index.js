// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = +price.innerHTML * +quantity.value;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = subtotal;
  return subtotal;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  const total = document.querySelector('#total-value span');
  const subtotalArray = [];
  allProducts.forEach((product) => {
    updateSubtotal(product);
    subtotalArray.push(updateSubtotal(product))
  });
  if (subtotalArray.length) {
    total.textContent = subtotalArray.reduce((a, b) => a + b);
  } else {
    total.textContent = 0;
  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productTarget = target.parentNode.parentNode;
  const tbodyNode = productTarget.parentNode;
  tbodyNode.removeChild(productTarget);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const cartElement = document.querySelector('#cart tbody');
  const newProductRow = document.createElement('tr');
  newProductRow.className = 'product';
  cartElement.appendChild(newProductRow);

  const name = document.querySelector('#product-name');
  const price = document.querySelector('#product-price');

  const newProductNameData = document.createElement('td');
  newProductNameData.className = 'name';
  newProductRow.appendChild(newProductNameData);

  const newProductNameSpan = document.createElement('span');
  newProductNameSpan.textContent = name.value;
  newProductNameData.appendChild(newProductNameSpan);

  const newProductPriceData = document.createElement('td');
  newProductPriceData.className = 'price';
  newProductPriceData.textContent = '$';
  newProductRow.appendChild(newProductPriceData);

  const newProductPriceSpan = document.createElement('span');
  newProductPriceSpan.textContent = price.value;
  newProductPriceData.appendChild(newProductPriceSpan);

  const newProductQuantityData = document.createElement('td');
  newProductQuantityData.className = 'quantity';
  newProductRow.appendChild(newProductQuantityData);

  const newProductQuantityInput = document.createElement('input');
  newProductQuantityInput.setAttribute('type', 'number');
  newProductQuantityInput.setAttribute('value', '0');
  newProductQuantityInput.setAttribute('min', '0');
  newProductQuantityInput.setAttribute('placeholder', 'Quantity');
  newProductQuantityData.appendChild(newProductQuantityInput);

  const newProductSubtotalData = document.createElement('td');
  newProductSubtotalData.className = 'subtotal';
  newProductSubtotalData.textContent = '$';
  newProductRow.appendChild(newProductSubtotalData);

  const newProductSubtotalSpan = document.createElement('span');
  newProductSubtotalSpan.textContent = '0';
  newProductSubtotalData.appendChild(newProductSubtotalSpan);

  const newProductRemoveBtnData = document.createElement('td');
  newProductRemoveBtnData.className = 'action';
  newProductRow.appendChild(newProductRemoveBtnData);

  const newProductRemoveBtn = document.createElement('button');
  newProductRemoveBtn.className = 'btn btn-remove';
  newProductRemoveBtn.textContent = 'Remove';
  newProductRemoveBtn.setAttribute('onclick', 'removeProduct(event)');
  newProductRemoveBtnData.appendChild(newProductRemoveBtn);

  name.value = '';
  price.value = '0';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach(button => {
    button.addEventListener('click', removeProduct)
  });

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
