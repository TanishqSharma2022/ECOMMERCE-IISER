import mongoose from "mongoose"

const dbConnect = async() => {
    if(mongoose.connection.readyState >= 1){
        return 
    }
    try{
        mongoose.connect(process.env.DB_URI!)
        console.log("connected")
        console.log("NEW CONNECTION MADE....")
    }catch(error){
        console.log(error)
    }

    // mongoose.connection.close()
}

export default dbConnect;