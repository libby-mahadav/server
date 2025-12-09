
import express, {Request, Response, Router} from 'express';
import { bookService } from "./bookService";

export const router = Router();

router.get('/getAllBooks', async (req: Request,res: Response) =>
{
    const books = await bookService.getAllBooks(); 
    res.status(200).send(books); 
});

router.post('/addBook',async (req: Request, res: Response) =>{

    const book = req.body;
  await bookService.addBook(book);
    res.status(200).send('book added successfully');
});