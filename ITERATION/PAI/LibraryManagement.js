function libraryItem(title,author,pages){
    this.title =title
    this.author =author
    this.pages =pages
    this.checkedOutBy =null

    libraryItem.items.push(this);
}
libraryItem.items =[]

libraryItem.prototype.checkOut =function(userId){
    this.checkedOutBy =userId;
    console.log(`[${this.constructor.name}] ${this.title} checked out by ${userId }`)
}
libraryItem.prototype.returnItem =function(){
    this.checkedOutBy =null;
    console.log(`[${this.constructor.name}] ${this.title} returned`)
}
libraryItem.prototype.getStatus =function(){
    console.log(`Status: ${this.checkedOutBy ?'checkedout':'available'}`)
}

libraryItem.getCheckeditems =function(){
    return libraryItem.items.filter(item => item.checkedOutBy).map(item=>({
        title:item.title,
        author:item.author,
        type:item.constructor.name,
        checkedOutBy:item.checkedOutBy
    }))
}
function Book(title,author,page,isbn){
        libraryItem.call(this,title,author,page)
    this.rating =this.rating
}
Book.prototype =Object.create(libraryItem.prototype)
Book.prototype.constructor =Book

function DVD(title,author,page,isbn){
    libraryItem.call(this,title,author,page)
this.rating =this.rating
}
DVD.prototype =Object.create(libraryItem.prototype)
DVD.prototype.constructor =DVD

function Magazine(title,author,page,isbn){
    libraryItem.call(this,title,author,page)
this.rating =this.rating
}
Magazine.prototype =Object.create(libraryItem.prototype)
Magazine.prototype.constructor =Magazine

// Creating new library items
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "Fiction", "9780743273565");
const dvd1 = new DVD("Inception", "Christopher Nolan", 148, "Science Fiction", "PG-13");
const magazine1 = new Magazine("National Geographic", "Various", 80, "Science", "April 2023", "Monthly");

// Check out and return operations
book1.checkOut("User123");
book1.returnItem();
book1.checkOut("User456");

// Get all checked out items
const checkedOutItems = libraryItem.getCheckeditems();
console.log("Checked out Items:",checkedOutItems)