//findAuthorById function takes in authors array and id
function findAuthorById(authors, id) {
  //find method is used to search for an author object with a matching id
  let auth = authors.find(author => author.id === id);
  //return matching author if found. If not, return undefined
  return auth;
}

//findBookById function takes in books array and id
function findBookById(books, id) {
  //find method is used to search for a book object with a matching id
  let foundBook = books.find(book => book.id === id);
  //return matching book if found. If not, return undefined
  return foundBook;
}

//partitionBooksByBorrowedStatus function takes in books array
function partitionBooksByBorrowedStatus(books) {
  /* reduce method on books array is used to to partition array into two different arrays 
     based on their borrowed status. We themn use the some method on the borrowed array 
     to check if there is at least one borrow record where the book has not been returned.
      This determines if the book is currently borrowed.
  */
  const partitionedBooks = books.reduce((acc, book) => { const isBorrowed = book.borrows.some(borrow => !borrow.returned);
  // push method is used to push the book into either the borrowed array or the returned array 
    isBorrowed ? acc.borrowed.push(book) : acc.returned.push(book); 
  return acc;
  }, { borrowed: [], returned: [] }); //Initialize accumulator with empty arrays for borrowed and returned books
  // Return the partitioned arrays
   return [partitionedBooks.borrowed, partitionedBooks.returned];
}

// getBorrowersForBook function take in a book object and accounts array 
function getBorrowersForBook(book, accounts) {
  // Extract the borrows array from the book object
  const { borrows } = book;
  /* map method is used to iterate over each borrow record in the borrow array
    and find the corrosponding account in the accounts array
  */
  const borrowers = borrows.map(({ id, returned }) => {
    /* 
    find method is used to find the corresponding account in the accounts array based on the id
    */
    const account = accounts.find(account => account.id === id);
    //object is created containing account info and returned status
    return {
      ...account,
      returned
    };
  });
  // Return the first 10 borrowers
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
