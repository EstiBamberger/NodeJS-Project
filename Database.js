import mongoose from "mongoose";
const uri =
"mongodb+srv://EsterBamberger:eb!!9876@cluster0.drqqbi9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uriLocal = "mongodb://localhost:27017/<dbname>";

const connectDB = async () => {
  await mongoose.connect(uri);
};
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})

export default connectDB;
