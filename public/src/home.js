// getTotalBooksCount function takes in books array
function getTotalBooksCount(books) {
  //returns the length of the array since it is the total amount of books
  return books.length;
}

// getTotalAccountsCount function takes in accounts array 
function getTotalAccountsCount(accounts) {
  //returns the length of the array since it is the total amount of accounts
  return accounts.length;
}

// getBooksBorrowedCount function takes in books array
function getBooksBorrowedCount(books) {
  // Filter method filters books array to include only those books that have not been returned
  const borrowedBooks = books.filter(book => !book.borrows[0].returned);
  // Return the length of the filtered array since it is the total amount of books
  return borrowedBooks.length;
}

// getMostCommonGenres function takes in books array
function getMostCommonGenres(books) {
  // Create an empty object to store the count of each genre
  const genreCounts = {};
  // Iterate over each book to count the occurrences of each genre
  books.forEach(book => {
    const { genre } = book;
    if (genreCounts[genre]) {
      genreCounts[genre] += 1;
    } else {
      genreCounts[genre] = 1;
    }
  });
  // Convert the object to an array of objects
  const genresArray = Object.keys(genreCounts).map(genre => ({
    name: genre,
    count: genreCounts[genre]
  }));
  // Sort the genres array by count in descending order
  genresArray.sort((a, b) => b.count - a.count);
  // Return the top 5 most common genres
  return genresArray.slice(0, 5);
}

// getMostPopularBooks function takes in books function
function getMostPopularBooks(books) {
  // Sort books by borrows count in descending order
  const sortedBooks = books.sort((a, b) => b.borrows.length - a.borrows.length);
  // Return the top 5 most popular books
  return sortedBooks.slice(0, 5).map(book => ({ name: book.title, count: book.borrows.length }));
}

// getMostPopularAuthors function to get the most popular authors
function getMostPopularAuthors(books, authors) {
  // Create an object to store the borrows count for each author
  const authorBorrows = {};
  // Iterate over each book to count borrows for each author
  books.forEach(book => {
    const author = authors.find(author => author.id === book.authorId);
    if (authorBorrows[author.id]) {
      authorBorrows[author.id].name = `${author.name.first} ${author.name.last}`;
      authorBorrows[author.id].count += book.borrows.length;
    } else {
      authorBorrows[author.id] = {
        name: `${author.name.first} ${author.name.last}`,
        count: book.borrows.length
      };
    }
  });
  // Convert the object to an array of objects
  const authorsArray = Object.values(authorBorrows);
  // Sort the authors array by borrows count in descending order
  authorsArray.sort((a, b) => b.count - a.count);
  // Return the top 5 most popular authors
  return authorsArray.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
