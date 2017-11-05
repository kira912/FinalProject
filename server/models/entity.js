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
  tvaIntra: String,
  siren: String,
  siret: String,
  license: String,
  financialGuarantees: String,
  status: String,
  socialCapital: String,
  exerciseDate: String,

  bank: String,
  addressBank: String,
  cityBank: String,
  codePostalBank: String,
  ownerCount: String,
  iban: String,
  codeBic: String,

  directorEntity: String,
  usersAttachment: [String]
});

module.exports = mongoose.model("Entity", entitySchema);
