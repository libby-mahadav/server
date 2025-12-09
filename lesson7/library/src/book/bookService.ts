import { Book, IBook } from "./bookModel";

export const bookService = {

    async getAllBooks(): Promise<IBook[]> {
        return await Book.find().exec();
    },

    async addBook(data: {bookName:string, authorName:string}): Promise<IBook> {
        const newBook = new Book(data);
        return await newBook.save();
    }
}