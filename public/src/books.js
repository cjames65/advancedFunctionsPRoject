function findAuthorById(authors, id) {
  let auth = authors.find(author => author.id === id);
  return auth;
}

function findBookById(books, id) {
  let foundBook = books.find(book => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  const partitionedBooks = books.reduce((acc, book) => { const isBorrowed = book.borrows.some(borrow => !borrow.returned);
  isBorrowed ? acc.borrowed.push(book) : acc.returned.push(book); 
  return acc;
  }, { borrowed: [], returned: [] });
   return [partitionedBooks.borrowed, partitionedBooks.returned];
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const borrowers = borrows.map(({ id, returned }) => {
    const account = accounts.find(account => account.id === id);
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
