const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    civility: String,
    nationality: String,
    birthDate: String,
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
    profilePic: String,
    entityAttachment: {
      type: Schema.Types.ObjectId,
      ref: "Entity",
      default: null
    },
    directorEntity: {
      type: Schema.Types.ObjectId,
      ref: "Entity",
      default: null
    },
    functionJob: String,
    contract: String,
    totalBusiness: {
      type: Number,
      default: 0
    },
    totalTicket: {
      type: Number,
      default: 0
    },
    annualSalary: Number,
    paidHolidaysIn: {
      type: Number,
      default: 0
    },
    paidHolidaysOut: {
      type: Number,
      default: 0
    },
    entryBusiness: String,
    startActivity: String,
    dayWorkedTimeStartAM: [String],
    dayWorkedTimeEndAM: [String],
    dayWorkedTimeStartPM: [String],
    dayWorkedTimeEndPM: [String],
    dayWorked: [String],
    dayAbsenceTimeStartAM: [String],
    dayAbsenceTimeEndAM: [String],
    dayAbsenceTimeStartPM: [String],
    dayAbsenceTimeEndPM: [String],
    dayAbsence: [String],
    endBusiness: String,
    professionalEmail: String,
    professionalNumber: Number,
    requestVacation: [String],
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
      enum: ["Admin", "Directeur", "Manager", "Vendeur", "Prestataire"],
      default: "Guest"
    }
  },
  {
    timestamps: { createdAt: "created_at", updateAt: "update_at" }
  }
);

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);
