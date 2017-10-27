const mongoose = require('mongoose');
module.exports = function (mongoURL) {

  mongoose.connect(mongoURL, {
    useMongoClient: true
  }, function (err) {
      if (err) {
        console.log(err);
      }
      else {
        console.log("Database connected");
      }
  });
  const apiSchema = mongoose.Schema({
    brand: {type:String, unique: true},
    in_stock: Number,
    size: Number,
    color: String,
    price: Number
  })

  const apiModel = mongoose.model("apiModel", apiSchema)

  return {
    apiModel
  }
}
