function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function (){
   return `${title} by ${author}, ${pages} pages, this book is ${read}`
  }
}

  // use function calls within objects to trigger info on itself
  // its almost always better to use return rather than console.log
  // then use console.log to call it 

  const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read')

  console.log(theHobbit.info());