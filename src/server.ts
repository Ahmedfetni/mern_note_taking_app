import mongoose from "mongoose";
import env from "./util/validateENV"
import app from "./app"


const PORT = env.PORT

const connectionString = env.MONGO_CONNECTION_STRING
mongoose.connect(connectionString).then(() => {
    // the server setup 
    app.listen(PORT, () => {
        //[Just a log 
        console.log(`server is running on Port ${PORT}`);
    });
    console.log("Connected to the database ")
    })
    .catch(console.error);





