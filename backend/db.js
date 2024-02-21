// const mongoose = require('mongoose')
// // const mongoDbClient = require("mongodb").MongoClient
// const mongoURI = 'mongodb+srv://foodizz:foodizz123@cluster0.hal8z52.mongodb.net/foodizz_db?retryWrites=true&w=majority' // Customer change url to your db you created in atlas
// // mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//         if (err) console.log("---" + err)
//         else {
//             // var database =
//             console.log("connected to mongo")
//             const foodCollection = await mongoose.connection.db.collection("food_items");
//             foodCollection.find({}).toArray(async function (err, data) {
//                 const categoryCollection = await mongoose.connection.db.collection("Categories");
//                 categoryCollection.find({}).toArray(async function (err, Catdata) {
//                     callback(err, data, Catdata);

//                 })
//             });
//             // listCollections({name: 'food_items'}).toArray(function (err, database) {
//             // });
//             //     module.exports.Collection = database;
//             // });
//         }
//     })
// };

const mongoose = require("mongoose");
const mongo_url =
  "mongodb+srv://foodizz:foodizz123@cluster0.hal8z52.mongodb.net/foodizz_db?retryWrites=true&w=majority";

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

