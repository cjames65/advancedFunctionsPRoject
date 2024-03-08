/* findAccountById function takes in an arracy of account objects 
and an id representing the id thats beeing looked for */
function findAccountById(accounts, id) {
  //Find method used to search for account with the matching id
  let acc = accounts.find(account => account.id === id);
  //return found object or undifined if not found. 
  return acc;
}

//sortAccountsByLastName function takes in an array of account objects
function sortAccountsByLastName(accounts) {
  //sort method used to compare two objects at a time
  let acc = accounts.sort((accountA, accountB) => 

  /* toLowerCase method used to change string value of last name to lower case to help compare
  in the inline if statement. If -1 is returned then the first last name comes before the second. If 
  1 is returned then the second last name comes first. */
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  //return array of sorted accounts
  return acc;
}

function getTotalNumberOfBorrows(account, books) {
  // Initialize a variable to store the total number of borrows
  let totalBorrows = 0;
  // Iterate through each book in the books array
  books.forEach(book => {
    // Check if the account's ID appears in the borrows array of the current book
    const borrowCount = book.borrows.filter(borrow => borrow.id === account.id).length;
    
    // Increment the totalBorrows count by the borrowCount for the current book
    totalBorrows += borrowCount;
  });
  
  // Return the total number of borrows
  return totalBorrows;
}


function getBooksPossessedByAccount(account, books, authors) {
  // Filter the books array to find books currently checked out by the given account
  const borrowedBooks = books.filter(book =>
    // Check if the book's most recent borrow record matches the account's ID and is not returned
    book.borrows[0].id === account.id && !book.borrows[0].returned
  );
  
  // Map over the borrowedBooks array to embed author information for each book
  const booksWithAuthors = borrowedBooks.map(book => {
    // Find the author object corresponding to the book's authorId from the authors array
    const author = authors.find(author => author.id === book.authorId);
    // Return a new object with the book's information and embedded author information
    return {
      ...book,
      author
    };
  });
  
  // Return the array of books with embedded author information
  return booksWithAuthors;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
