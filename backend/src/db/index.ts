import mongoose from "mongoose";
import { DB_NAME } from "../constant";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n Connected to MongoDB: ${connectionInstance.connection.host} \n`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED !! ", error);
    process.exit(1);
  }
};

export { connectDB };
