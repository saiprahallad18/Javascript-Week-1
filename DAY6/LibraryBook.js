let books = [
    {title:"Book A", author:"aaa", isAvailable: true},
    {title:"Book B", author:"bbb", isAvailable: true},
    {title:"Book C", author:"ccc", isAvailable: false}
];

books.forEach(books => {
    console.log(`Title: ${books.title},Author: ${books.author},isAvailable: ${books.isAvailable}`);
});
 
let bookAvailable = books.filter(books => {
    return books.isAvailable === true;
});

let updatedBook = books.map(books => {
    if(books.title === "Book B"){
        return{
            ...books,
            isAvailable: false
        };
    }
    return books;
});

console.log("Books after borrowing:");
updatedBook.forEach(books => {
    console.log(`Title: ${books.title}, Available: ${books.isAvailable}`);
});