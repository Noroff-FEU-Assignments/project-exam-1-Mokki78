import { bread, milk, cheese, apples} from "./products.js";

let cart = [];
 
function addToCart(product, quantity = 1) {
    const isItemInCart = cart.find((currentProduct) => {
        if(currentProduct.id === product.id) {
        return true;
    }
    return false;
    });
    if(isItemInCart) {
        const itemIndex = cart.findIndex((currentProduct) => {
            if(currentProduct.id === product.id) {
                return true;
            }
        });
        cart[itemIndex].quantity += quantity;
    } else {
        cart.push({...product, quantity})
    }
   
}

function removeFromCart(product) {
    const productId = product.id;
    const filteredProducts = cart.filter((currentProduct) => {
        console.log(`currentProduct.id !== productid`, currentProduct.id, productId)
        if(currentProduct.id !== productId) {
            return true;
        }
     });
  cart = filteredProducts;
 
}

function clearCart() {
    cart = [];

}

function getTotalCart() {
    const totalCostOfCart = cart.reduce((cartTotal, currentProduct) => {
    cartTotal += (currentProduct.price * currentProduct.quantity);
    return cartTotal;

}, 0);
return totalCostOfCart;

}

function checkOutCart() {
    const totalCost = getTotalCart();
   
}


addToCart(bread);
addToCart(cheese);
addToCart(cheese);
addToCart(cheese);
addToCart(bread);
checkOutCart();
clearCart();

console.log("My cart", cart);