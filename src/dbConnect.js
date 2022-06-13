import mongoose from "mongoose"


mongoose.connect("mongodb+srv://gustavo:guhzika10@cluster0.o5ppg.mongodb.net/api-mobiL");

let db = mongoose.connection;

export default db;
