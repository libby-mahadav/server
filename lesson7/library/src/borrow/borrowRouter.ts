import {borrowService} from "./borrowService";
import express,{Request, Response, Router} from 'express';


export const router = Router();

router.post('/addBorrow', async (req: Request, res: Response) => {
const borrow = req.body;
try{
await borrowService.addBorrow(borrow);
res.status(200).send('borrow added succesfully');
}
catch(error){
res.status(500).send('there is an error');
}
});

router.get('/getBorrowById/:userId', async (req: Request, res: Response)=>{
const userId = req.params.userId;

const borrow = await borrowService.getBorrowById(userId);
res.status(200).send(borrow);

});