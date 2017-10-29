const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  civility: String,
  nationality: String,
  birthDate: Number,
  telNumber: Number,
  email: {
    type: String,
    unique: true,
    required: true,
    dropDups: true
  },
  address: String,
  codePostal: String,
  city: String,
  country: String,
  vitalCard: String,
  transportTicket: String,
  profilePic: String,
  entityAttachment: String,
  functionJob: String,
  contract: String,
  annualSalary: Number,
  entryBusiness: Number,
  startActivity: Number,
  endBusiness: Number,
  professionalEmail: String,
  professionalNumber: Number,
  firstnameUrgence: String,
  lastnameUrgence: String,
  linkUser: String,
  telNumberUrgence: Number,
  emailUrgence: String,
  bloodGroup: String,
  allergies: String,

  bank: String,
  addressBank: String,
  codePostalBank: String,
  cityBank: String,
  ownerCount: String,
  iban: String,
  codeBic: String,

  role: {
    type: String,
    enum: ["Admin", "Director", "Manager", "Seller", "Recipient", "Guest"],
    default: "Guest"
  },
  totalBusiness: Number
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);
