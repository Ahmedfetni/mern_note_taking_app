import { InferSchemaType, Schema, model} from "mongoose";
const noteSchema = new Schema({
    title : {type : String, required : true },
    text:  {type:String,
    required: false},
    
},{timestamps:true});

//creating a type for correctness 
type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note",noteSchema);