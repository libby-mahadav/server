import mongoose, {Schema} from 'mongoose';


const UserSchema = new Schema({
userId: {
  type: String,
  required: true,
  unique: true,
},
  name: { type: String, required: true },
  birthDate: {type: Date, required: true},
  createdAt: {
        type: Date,
        default: Date.now,}
  }
  ,
{
    toJSON: { 
      virtuals: true,
      id: false
      }
});
UserSchema.virtual('age').get(function(){
    const today = new Date();
    if (!this.birthDate) return null;
    const age = today.getFullYear() - this.birthDate.getFullYear();
    return age;
});
export const User = mongoose.model('User', UserSchema);
