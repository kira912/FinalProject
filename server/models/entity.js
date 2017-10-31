const mongoose = require("mongoose");
const { Schema } = mongoose;

const entitySchema = new Schema({
  name: String,
  typeEntity: String,
  enseign: String,
  address: String,
  city: String,
  codePostal: String,
  telNumber: Number,
  email: String,
  totalBusiness: Number,
  totalTicket: Number,

  rcs: String,
  tvaIntra: Number,
  siren: String,
  siret: String,
  license: String,
  financialGuarantees: String,
  status: String,
  socialCapital: Number,
  exerciseDate: Number,

  bank: String,
  address: String,
  city: String,
  codePostal: String,
  ownerCount: String,
  iban: String,
  codeBic: Number,

  usersAttachment: [String]
});

module.exports = mongoose.model("Entity", entitySchema);
