import dotenv from "dotenv";
import { connectDB } from "./db";
import { app } from "./app";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRRRRRRR: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 7000, () => {
      console.log(`Server is running at port `, process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !!", err.message);
  });
