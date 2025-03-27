function createBook(title,author){
    return{
        title,
        author,
        details :function(){
            console.log(`Book: "${this.title}", Author: "${this.author}"`);
        }
        
    };
}
function createLibrary() {
    let books = [];

    return {
        addBook(book) {
            books.push(book);
            console.log(`Added: "${book.title}" by ${book.author}`);
        },
        removeBook(title) {
            const index = books.findIndex(book => book.title === title);
            if (index !== -1) {
                const removedBook = books.splice(index, 1);
                console.log(`Removed: "${removedBook[0].title}"`);
            } else {
                console.log(`Book not found: "${title}"`);
            }
        },
        listBooks() {
            if (books.length === 0) {
                console.log("No books in the library.");
            } else {
                console.log("Library Collection:");
                books.forEach(book => book.details());
            }
        }
    };
}
const myLibrary = createLibrary();

const book1 = createBook("1984", "George Orwell");
const book2 = createBook("To Kill a Mockingbird", "Harper Lee");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.listBooks();

myLibrary.removeBook("1984");
myLibrary.listBooks();
