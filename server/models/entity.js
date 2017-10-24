const mongoose = require('mongoose')
const { Schema } = mongoose

const entitySchema = new Schema({
  entityData: {
    name: String,
    type: String,
    entityAttachment: String,
    enseign: String,
    address: String,
    telNumber: Number,
    email: String  
  },
  legalData: {
    rcs: String,
    tvaIntra: Number,
    siren: String,
    siret: String,
    license: String,
    financialGuarantees: String,
    status: String,
    socialCapital: Number,
    exerciseDate: Number
  },
  bankData: {
    bank: String,
    addressPostalBank: String,
    ownerCount: String,
    iban: String,
    codeBic: Number
  },
  gestionData: {
    directorEntity: String,
    userAttachment: String
  }
})

module.exports = mongoose.model('Entity', entitySchema)