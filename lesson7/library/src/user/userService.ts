import { User } from "./userModel";

export default class userService{

async addUser(data:{id:string, name: string, birthDate: Date}){
const user = new User(data);
return await user.save();
}

async  getUserDetails(){
    return await User.find().exec();
}
}
