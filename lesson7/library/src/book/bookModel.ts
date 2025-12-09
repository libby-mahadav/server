import mongoose, {Model, Schema} from "mongoose";

export interface IBook{
    bookName: string,
    authorName:  string
}
const bookSchema = new Schema<IBook>({
    bookName:{type:String ,required:true},
    authorName:{type:String, required:true}
},
{
    versionKey:false
},
);
export const Book: Model<IBook> = mongoose.model<IBook>('Book',bookSchema);