
        let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    alert(`Se ha agregado ${productName} al carrito por $${price}.`);
}

function goToCart() {
        window.location.href = "ordenar.html" ; // Redirige a la página de envío

}
    