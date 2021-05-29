const getTheTitles = function(books) {
  const getTitles = []
  books.forEach(book => getTitles.push(book.title))
  return getTitles
}

module.exports = getTheTitles;
