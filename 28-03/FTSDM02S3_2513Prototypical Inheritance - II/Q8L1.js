function Book(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
}
function Member(name) {
    this.name = name;
    this.borrowedBooks = [];
}
Member.prototype.borrowBook = function(book) {
    if (this.borrowedBooks.length >= 3) {
        console.log(`${this.name} cannot borrow more than 3 books.`);
        return;
    }
    
    if (book.isAvailable) {
        book.isAvailable = false;
        this.borrowedBooks.push(book.title);
        console.log(`${this.name} borrowed "${book.title}"`);
    } else {
        console.log(`"${book.title}" is already borrowed.`);
    }
};
function PremiumMember(name) {
    Member.call(this, name); 
    this.specialCollectionAccess = true;
}
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

PremiumMember.prototype.borrowBook = function(book) {
    if (this.borrowedBooks.length >= 5) {
        console.log(`${this.name} cannot borrow more than 5 books.`);
        return;
    }
    Member.prototype.borrowBook.call(this, book);
};

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
const book3 = new Book("1984", "George Orwell");

const regularMember = new Member("Alice");
const premiumMember = new PremiumMember("Bob");

regularMember.borrowBook(book1);
regularMember.borrowBook(book2);
regularMember.borrowBook(book3);

const borrowForAlice = regularMember.borrowBook.bind(regularMember, book1);
borrowForAlice();

console.log(`Alice's borrowed books:`, regularMember.borrowedBooks);
console.log(`Bob's borrowed books:`, premiumMember.borrowedBooks);