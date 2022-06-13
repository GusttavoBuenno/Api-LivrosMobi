import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid';





let myuuid = uuidv4();

const livroSchema = new mongoose.Schema(
   
    {
        _id: {type:String, default:uuidv4(myuuid)},    
        titulo: { type: String, required: true },
        autor: { type: String, required: true }
    }

);


const livros = mongoose.model('livros', livroSchema)
export default livros;

