import express, { Request, Response }  from 'express';
import {router as usersRouter} from './user/userRouter';
import {router as borrowRouter} from './borrow/borrowRouter';
import {router as bookRouter} from './book/bookRouter';
import {myDB} from './db';
export const app = express();

app.use(express.json());
myDB.getDB();

app.use((err: Error, req: Request , res: Response, next: any) => {
    res.status(500).send(err);
});
app.use('/users', usersRouter);
app.use('/borrows', borrowRouter);
app.use('/books', bookRouter);


export default app;