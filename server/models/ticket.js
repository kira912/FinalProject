const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketSchema = new Schema(
  {
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    geographicalArea: String,
    dateDeparture: String,
    returnDate: String,
    country: String,
    typology: String,
    suppliers: [String],
    bookingDate: String,
    gestourOrder: Number,
    businessVolume: Number,
    insurance: String,

    firstname: String,
    lastname: String,
    customerEmail: String,
    mobileClient: String,
    numberPax: Number,
    recruitement: Boolean,
    origin: String,
    crmProducts: [String],
    crmPersonal: [String],
    crmOptIn: [String],
    remarks: String
  },
  {
    timestamps: { createdAt: "created_at", updateAt: "update_at" }
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
