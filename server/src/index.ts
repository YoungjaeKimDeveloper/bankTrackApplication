import express, { Express } from "express";
import mongoose from "mongoose";

const app: Express = express();
const port = process.env.PORT || 3001;

// Set the middleware
app.use(express.json());

const mongoURI: string =
  "mongodb+srv://admin:admin@personalfinanceproject.pghp5.mongodb.net/";

try {
  mongoose.connect(mongoURI).then(() => console.log("MongoDB is connected"));
} catch (err) {
  console.error("Failed to Connect to MongoDB");
}

app.listen(port, () => {
  console.log(`Server is Running on PORT ${port}`);
});
