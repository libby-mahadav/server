import {User} from"../user/userModel";
import {Book} from"../book/bookModel";
import { Borrow, IBorrow } from "./borrowModel";
import mongoose, {Types} from "mongoose";
import { Promise } from "mongoose";

export const borrowService = {
    async addBorrow(data:{userId: string,bookId:string}): Promise<IBorrow>{
        const borrow=new Borrow(data);
        return await borrow.save();
    },

    async getBorrowById(userId1: string): Promise<IBorrow[] | null> {
        const b = Borrow.find({userId:userId1});
        return await b
        .populate({
            path: 'userId',
            select: 'name age userId -_id', 
            foreignField: 'userId',
            localField: 'userId',  
            model: 'User'
        })
              .populate({
            path: 'bookId',
            select: 'bookName authorName', 
            model: 'Book'
        })
        .exec() as IBorrow[];
    }

}
