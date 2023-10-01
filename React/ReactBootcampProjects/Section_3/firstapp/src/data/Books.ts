export interface Book {
    author:string;
    title:string;
    id:number;
  }
  
  
  const books: Book[] = [
    {author: 'tom', title:'kids', id:1},
    {author: 'ger', title: 'coding for fun',id:2},
    {author: 'ag', title: 'thriller', id:3}
  ]

  export default books;