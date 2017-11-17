const mongoose = require("mongoose");
const { Schema } = mongoose;

const paidVacationSchema = new Schema({
  start: String,
  end: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  status: {
    type: String,
    enum: ["En attente", "Validé"],
    default: "En attente"
  }
});

module.exports = mongoose.model("PaidVacation", paidVacationSchema);
