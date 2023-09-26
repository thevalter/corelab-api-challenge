import mongoose from "mongoose";
import 'dotenv/config';

class DatabaseConnect{

    private mongoose;

    constructor(){
        this.mongoose = mongoose;
        this.init();
    }

    private init(){

        this.mongoose.set('strictQuery', true);

        mongoose.connect(process.env.DATABASE_URL as string)
        .then(() => console.log("connected"))
        .catch((err) => console.log(`not connected ${err}`));
    }
}

export default new DatabaseConnect();