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
    brand: String,
    size: Number,
    in_stock: Number,
    color: String,
    price: Number
  })
  apiSchema.index({name: 1}, {unique: true})
  const apiModel = mongoose.model("apiModel", apiSchema)

  return {
    apiModel
  }
}
