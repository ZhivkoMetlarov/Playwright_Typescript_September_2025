
type Category = "food" | "clothes" | "electronics"

interface Product {
    name: string;
    price: number;
    category: "food" | "clothes" |"electronics"
}

interface Customer {
    name: string;
    email: string;
    cart: Product[]
}

const apple: Product = {name: "Apple", price: 2, category: "food"};
const tShirt: Product = {name: "T-shirt", price: 20, category: "clothes"};
const laptop: Product = {name: "Laptop", price: 350, category:"electronics"};

const products: Product [] = [apple, tShirt];
// add more products

const customer: Customer = {name:"Ivan Petrov", email:"ivan@mail.com", cart: products}
// add second customer custom array cart[ apple, tShirt, laptop]

// add function displayCart - display cart customer name and products.
// add function filterByCategory - recieve products and category as parameters and filter products by given category
// add function calculateTotalPrice - recieve customer data and combine all products price
// customer.cart[0].price
// customer.cart[1].price
// ....

export{};