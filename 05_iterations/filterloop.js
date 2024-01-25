
const myNums = [1, 2, 3, 4, 5]


// const newNums = myNums.filter( (num) => num > 4)

const newNums = myNums.filter( (num) =>{
    return num > 3
})


console.log(newNums);


// same thing with foreach loop 

const newNumsPush = []       // define a array where we will push the values 


myNums.forEach ( (num) => {
    if (num > 3) {
        newNumsPush.push(num)       // pushing the values that are greater than 3 
    }
})

console.log(newNumsPush);



// book project 


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter( (bookName) => bookName.genre === "History")
// console.log(userBooks);



let bookName = []

books.forEach( (book) => {
    if (book.genre === "History") {
        bookName.push(book)
    }
})

// console.log(bookName);




// another example 
// problem is you have write code to filer books with genre Nf and edition 2010 
// use both filter and foreah


const bookNew = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  // filter 

 const namebook = bookNew.filter( (bookname) => bookname.genre === "Non-Fiction" && bookname.edition == 1989)

 console.log(namebook);


  // for each loop 

const bookArry = []

bookNew.forEach( (book) => {
    if (book.genre === "Non-Fiction") {
        bookArry.push(book)
    }
})

console.log(bookArry);

