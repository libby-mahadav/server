import userService  from "./userService";
import { User } from "./userModel";
import express, {Router, Request,Response} from 'express';

export const router = Router();
const userService1 = new userService();

router.get('/getAllUsers', async (req: Request,res : Response)=>{
  const users = await userService1.getUserDetails();
  res.status(200).send(users);
});

router.post('/addUser',async (req: Request, res: Response)=>{
const newUser = req.body;
await userService1.addUser(newUser);
    res.status(200).send('user added succesfully!')

});
