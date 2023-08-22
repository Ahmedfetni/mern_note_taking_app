import express from "express";
import "dotenv/config";
import NoteModel from "./models/notes";

const app = express();


//Get Request to the root 
app.get('/', async (req, res) => {
    const notes  = await NoteModel.find().exec(); //await to get the values not the promise 
    
    res.status(200).json(notes);
    

});



export default app;