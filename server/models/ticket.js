const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketSchema = new Schema({
  start: String,
  dateStart: String,
  end: String,
  dateEnd: String,
  price: Number,
  category: String,
  client: [String],
  returnStart: String,
  returnStartDate: String,
  returnEnd: String,
  returnEndDate: String,
  returnPrice: String,
  returnCategory: String,
  seller: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Ticket", ticketSchema);
