
const mongoose = require("mongoose");
const mongo_url = process.env.MONGO_URL;

  const mongodb = async () => {
    try { 
        await mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected successfully...");

        const fetch_food_items = mongoose.connection.db.collection("food_items");
        const items_data = await fetch_food_items.find({}).toArray();
        global.foodData = items_data;
        // console.log("global food data--->",global.foodData);

        const fetch_food_category = mongoose.connection.db.collection("food_category");
        const category_data = await fetch_food_category.find({}).toArray();
        global.foodCategory = category_data;
        // console.log(global.foodCategory);

    } catch (error) {
        console.error("Error connecting to the database...", error);
    } 
}

module.exports = mongodb;

