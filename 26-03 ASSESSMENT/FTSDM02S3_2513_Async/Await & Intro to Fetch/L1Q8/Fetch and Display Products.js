async function fetchProducts() {
    const apiUrl = "https://fakestoreapi.com/products";
    
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error("Failed to fetch products. Please try again later.");
        }
        
        const products = await response.json();
        console.log("Fetched Products:", products);
        
        const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
        console.log("Total Price of all Products:", totalPrice);
        
    } catch (error) {
        console.error(error.message);
    }
}

fetchProducts();
