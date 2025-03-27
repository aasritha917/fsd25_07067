function createBook(title, author) {
    return {
      title: title,
      author: author,
      printInfo: function () { 
        console.log(`Book: "${this.title}", Author: "${this.author}"`);
    }
    };
  }
  const book = createBook("1984", "George Orwell");
book.printInfo();


  