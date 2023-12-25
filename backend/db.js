const mongoose = require("mongoose");
const mongo_url =
  "mongodb+srv://foodizz:foodizz123@cluster0.hal8z52.mongodb.net/foodizz_db?retryWrites=true&w=majority";

  const mongodb = async () => {
    try {
        await mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected successfully...");

        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        console.log(data);
    } catch (error) {
        console.error("Error connecting to the database...", error);
    }
}

module.exports = mongodb;
