import axios from "axios";

function errHandler(err) {
  console.error("API", err);
}
void errHandler;

const users = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

export function getUsers() {
  return users.get("/users").then(response => {
    return response.data;
  });
}

export function getSingleUser(id) {
  return users.get("/users/" + id).then(response => {
    return response.data;
  });
}

export function editUser(id, userInfo) {
  return users.patch("/users/" + id, userInfo).then(response => {
    return response.data;
  });
}

export function editUserBusiness(id, editBusiness) {
  return users
    .patch("/users/" + id + "/business", editBusiness)
    .then(response => {
      return response.data;
    });
}

export function editUserTotalTicket(id, editTicket) {
  return users
    .patch("/users/" + id + "/ticket/new", editTicket)
    .then(response => {
      return response.data;
    });
}

export function getTimeWorked(id) {
  return users.get("/users/" + id + "/time-info").then(response => {
    return response.data;
  });
}

export function editTimeWorked(id, timeInfo) {
  return users.patch("/users/" + id + "/worked", timeInfo).then(response => {
    return response.data;
  });
}

export function getAbsences(id) {
  return users.get("/users/" + id + "/absences").then(response => {
    return response.data;
  });
}

export function newAbsence(id, timeInfo) {
  return users.patch("/users/" + id + "/absences", timeInfo).then(response => {
    return response.data;
  });
}

export function newUser(userInfo) {
  return users.post("/users", userInfo).then(response => {
    return response.data;
  });
}

// Profile

export function editProfile(id, profileInfo) {
  return auth.patch("/profile/" + id, profileInfo).then(response => {
    return response.data;
  });
}

export function deleteUser(id) {
  return users.delete("/users/" + id).then(response => {
    return response.data;
  });
}
