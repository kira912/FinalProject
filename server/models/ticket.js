const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketSchema = new Schema({
  start: String,
  end: String,
  price: Number,
  date: String,
  category: String,
  client: [String],
  seller: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Ticket", ticketSchema);
