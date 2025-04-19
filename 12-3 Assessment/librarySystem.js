const library = {
    name: "Central Library",
    established: 1985,
    sections: {
      fiction: { books: 200, librarians: 3 },
      science: { books: 150, librarians: 2 },
      history: { books: 100, librarians: 1 }
    },
    members: [
      { name: "Amit", age: 25, borrowedBooks: ["fiction", "science"] },
      { name: "Priya", age: 30, borrowedBooks: ["history"] },
      { name: "Raj", age: 22, borrowedBooks: ["fiction", "history"] }
    ]
  };
  
  const newSection = {
    philosophy: { books: 80, librarians: 1 }
  };

  
  function updateLibrary(library,newSection){
    return{...library,sections:{...library.sections,...newSection}}
  }

  const updatedLibrary = updateLibrary(library, newSection);
console.log(JSON.stringify(updatedLibrary, null, 2));
