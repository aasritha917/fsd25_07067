function createInventoryItem(name,category,price){
    let item = {
        name: name,
        category: category,
        price: price,
        describeItem: function () {
            console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
        }
    };
    return item;
}
function addItemDiscount(inventoryItem, discountPercent) {
    let discountedItem = { 
        ...inventoryItem, 
        discountPercent: discountPercent,
        discountedPrice: inventoryItem.price * (1 - discountPercent / 100),
        applyDiscount: function () {
            console.log(`Discounted Price for ${this.name}: ${this.discountedPrice}`);
        }
    };
    return discountedItem;
}
const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();


const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();

