import { Book } from "src/app/books/model/book";

export class Authors {
    
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public books: Book[]=[],
      public biography: string,
    ){}
  }
  