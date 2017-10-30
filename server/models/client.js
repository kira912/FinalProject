const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema({
  firstname: String,
  lastname: String,
  airlineTicket: {
    type: Schema.Types.ObjectId,
    ref: "Ticket"
  }
});

module.exports = mongoose.modelNames("Client", clientSchema);
