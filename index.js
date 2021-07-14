const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(async () => {
    const result = await milkShake.create({
      title: "Milk Shake",
      level: "Easy Peasy",
      ingredients: ["chocolate-flavored syrup", "milk", "vanilla ice cream"],
      cuisine: "American",
      dishType: "drink",
      duration: 1,
      creator: "Guilherme",
    });
    console.log(result);

    const manyMilkShakeresult = await milkShake.insertMany(milkshake);
    console.log(manyMilkShakeresult);
  })

  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
