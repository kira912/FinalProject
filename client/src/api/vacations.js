import axios from "axios";

function errHandler(err) {
  console.error("API", err);
}
void errHandler;

const vacations = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

export function getVacation() {
  return vacations.get("/vacation").then(response => {
    return response.data;
  });
}

export function getSingleVacation(id) {
  return vacations.get("/vacation/" + id).then(response => {
    return response.data;
  });
}

export function requestVacation(vacationInfo) {
  return vacations.post("/vacation", vacationInfo).then(response => {
    return response.data;
  });
}

export function editRequestVacation(id, infoRequest) {
  return vacations.patch("/vacation/" + id, infoRequest).then(response => {
    return response.data;
  });
}
