var mongoose = require('mongoose')


var CustomerSchema = new mongoose.Schema({
  name:String,
  email:{ type: String, required: true, unique: true},
  password:{ type: String, required: true},
  gender:String,
  age:Number,
  update_at:{ type:Date, default: Date.now},
});

module.exports = mongoose.model('Customer', CustomerSchema);
