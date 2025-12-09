import mongoose,{Model, Schema} from "mongoose";

export interface IBorrow{
    bookId:string,
    userId:string,
    borrowDate?:Date
}

const borrowschema=new Schema<IBorrow>({
    bookId:{type:String,required:true,ref:'Book'},
    userId:{type:String,required:true,ref:'User'}
},
{ 
   virtuals:true
}
);
borrowschema.virtual('borrowDate').get(function(){
    let dateCreate:Date= new Date();
    return dateCreate;
})

export const Borrow: Model<IBorrow>=mongoose.model<IBorrow>('Borrow',borrowschema);