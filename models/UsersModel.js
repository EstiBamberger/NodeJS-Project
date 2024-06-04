import mongoose from "mongoose";
import LinksModel from './LinksModel.js'; 
const UsersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "new task"
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  links: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Links'
    }
  ]
});

export default mongoose.model("users", UsersSchema);
