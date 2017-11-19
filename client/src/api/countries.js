import axios from "axios";

function errHandler(err) {
  console.error("API", err);
}
void errHandler;

const countries = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhsot:3000/api"
});

export function listCountries() {
  const countriesDB = require("../../../server/data/countries");
  return countriesDB.map(obj => {
    return obj.name;
  });
}

export function countriesDB() {
  const countriesDB = require("../../../server/data/countries");
  return countriesDB;
}
