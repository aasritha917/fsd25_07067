function cartSyatem(){
    let cart =[]

    cart.push("Apples") 
    cart.push("Banana")
    cart.push("Bread")
    cart.push("Milk")
    

    let removedItem = cart.pop()

    let totalItems =cart.length
    let noofItems =cart
    return {
        totalItems :totalItems,
        noofItems: noofItems,
        removedItem :removedItem
    }
}
const result = cartSyatem()
console.log("The total number of items in the cart:",result.totalItems)
console.log("The final list of items:",result.noofItems)
console.log("The item that was removed:",result.removedItem)