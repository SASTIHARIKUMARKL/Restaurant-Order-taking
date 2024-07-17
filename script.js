let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartCount.textContent = cart.length;
    
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(({ item, price }) => {
        total += price;
        const li = document.createElement('li');
        li.textContent = `${item} - Rs.${price}`;
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total;
}

function checkout() {
    alert('Checking out...');
    // Implement checkout logic here
}
