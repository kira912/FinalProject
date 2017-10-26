const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  /* personalData: {
    civility: String,
    nationality: String,
    birthDate: Number,
    telNumber: Number,
    email: String,
    address: String,
    codePostal: Number,
    city: String,
    country: String,
    vitalCard: String,
    transportTicket: String,
    profilePic: String

  },
  professionalData: {
    entityAttachment: String,
    function: String,
    contract: String,
    annualSalary: Number,
    entryBusiness: Number,
    startActivity: Number,
    endBusiness: Number,
    professionalEmail: String,
    professionalNumber: Number,

  },
  ermergencyContact: {
    firstName: String,
    lastName: String,
    linkUser: String,
    telNumber: Number,
    email: String
  },
  medicalData: {
    bloodGroup: String,
    allergies: String
  },
  role: {
    type: String,
    enum: ['Admin', 'Director', 'Manager', 'Seller', 'Recipient', 'Guest'],
    default: 'Guest'
  }  */
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema)