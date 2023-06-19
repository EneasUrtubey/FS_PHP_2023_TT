const addToCart1Button = document.getElementById('add-to-cart-1');
const addToCart2Button = document.getElementById('add-to-cart-2');
const addToCart3Button = document.getElementById('add-to-cart-3');
const addToCart4Button = document.getElementById('add-to-cart-4');
const cart = document.getElementById('cart');
const totalText = document.getElementById('total');
const buyBtn = document.getElementById("buyBtn");

let total = 0.00;

addToCart1Button.addEventListener('click', () => {
    const category = document.getElementById('category-1');
    const quantity = document.getElementById('quantity-1');
    const price = parseFloat(addToCart1Button.getAttribute('data-price'));

    category.textContent = 'Categoría 1';
    quantity.textContent = '1';

    const listItem = document.createElement('li');
    listItem.textContent = `GENERAL - $${price}`;
    cart.appendChild(listItem);

    total += price;
    totalText.textContent = total.toFixed(2);
});

addToCart2Button.addEventListener('click', () => {
    const category = document.getElementById('category-2');
    const quantity = document.getElementById('quantity-2');
    const price = parseFloat(addToCart2Button.getAttribute('data-price'));

    category.textContent = 'Categoría 2';
    quantity.textContent = '2';

    const listItem = document.createElement('li');
    listItem.textContent = `ESTUDIANTE - $${price}`;
    cart.appendChild(listItem);

    total += price;
    totalText.textContent = total.toFixed(2);
});

addToCart3Button.addEventListener('click', () => {
    const category = document.getElementById('category-3');
    const quantity = document.getElementById('quantity-3');
    const price = parseFloat(addToCart3Button.getAttribute('data-price'));

    category.textContent = 'Categoría 3';
    quantity.textContent = '2';

    const listItem = document.createElement('li');
    listItem.textContent = `TRAINEE - $${price}`;
    cart.appendChild(listItem);

    total += price;
    totalText.textContent = total.toFixed(2);
});

addToCart4Button.addEventListener('click', () => {
    const category = document.getElementById('category-4');
    const quantity = document.getElementById('quantity-4');
    const price = parseFloat(addToCart4Button.getAttribute('data-price'));

    category.textContent = 'Categoría 4';
    quantity.textContent = '4';

    const listItem = document.createElement('li');
    listItem.textContent = `JUNIOR - $${price}`;
    cart.appendChild(listItem);

    total += price;
    totalText.textContent = total.toFixed(2);
});







const resetCartButton = document.getElementById('reset-cart');

resetCartButton.addEventListener('click', () => {
    // Borra todos los elementos del carrito
    cart.innerHTML = '';

    // Reinicia el total a cero
    total = 0.00;
    totalText.textContent = total.toFixed(2);
});


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});




function verificar() {
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastName").value;
    if (nombre.length < 3 || apellido.length < 3) {
      alert("Ingrese más de 3 caracteres en Nombre y Apellido");
      return false;
    }
    var email = document.getElementById("mail").value;
    if (email.length === 0) {
      alert("Ingrese su correo electrónico");
      return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Ingrese un correo electrónico válido");
      return false;
    }
  }
