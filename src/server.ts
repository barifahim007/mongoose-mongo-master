import mongoose from "mongoose";
import app from "./app";

const port: number = 7000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongosh_mongo");
    console.log(`database Connected`);
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (err) {
    console.log(`database failed to connect ${err}`);
  }
}

main();
