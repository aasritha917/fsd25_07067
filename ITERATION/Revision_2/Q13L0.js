const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    addBook(book) {
        if (!book.title || !book.author || !book.year) {
            console.log("Book information is incomplete.");
            return;
        }
        this.books.push(book);
        console.log(`Book "${book.title}" added successfully.`);
    },
    findBookByTitle(title) {
        const book = this.books.find(book => book.title === title);
        return book ? book : "Book not found.";
    },
    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            const removedbook = this.books.splice(index, 1);
            console.log(`Book "${removedBook[0].title}" removed successfully.`);
        } else {
            console.log("Book not found.");
        }
    }
};
library.addBook({title: "What the hell" ,author: "George Orwell", year: 1949 });
console.log(library.books.length);