import axios from "axios";

// Authentication
function errHandler(err) {
  console.error("API", err);
}
void errHandler;

const auth = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

function saveUserInfo({ token, user }) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

export function checkUser(vm) {
  const token = localStorage.getItem("token");
  const userInfo = localStorage.getItem("user");
  if (token && userInfo) {
    const user = JSON.parse(userInfo);
    saveUserInfo({
      token,
      user
    });
    vm.user = user;
  }
}

export function login(username, password, vm) {
  return auth
    .post("/login", {
      username,
      password
    })
    .then(response => {
      saveUserInfo(response.data);
      vm.user = response.data.user;
      return response.data;
    });
}

export function getMyInfo() {
  return auth.get("/secret").then(response => response.data);
}

export function logout(vm) {
  localStorage.removeItem("token");
  vm.user = null;
  delete axios.defaults.headers.common["Authorization"];
}

// Entities
export function getEntities() {
  return auth.get("/entities").then(response => {
    return response.data;
  });
}

export function newEntity(entityInfo) {
  return auth.post("/entities", entityInfo).then(response => {
    return response.data;
  });
}

export function editEntity(id, entityInfo) {
  return auth.patch("/entities/" + id, entityInfo).then(response => {
    return response.data;
  });
}

export function editEntityBusiness(id, editBusiness) {
  return auth
    .patch("/entities/" + id + "/business", editBusiness)
    .then(response => {
      return response.data;
    });
}

export function getSingleEntity(id) {
  return auth.get("/entities/" + id).then(response => {
    return response.data;
  });
}

export function deleteEntity(id) {
  return auth.delete("/entities/" + id).then(response => {
    return response.data;
  });
}

// Users

export function getUsers() {
  return auth.get("/users").then(response => {
    return response.data;
  });
}

export function getSingleUser(id) {
  return auth.get("/users/" + id).then(response => {
    return response.data;
  });
}

export function getTimeWorked(id) {
  return auth.get("/users/" + id + "/time-info").then(response => {
    return response.data;
  });
}

export function editUser(id, userInfo) {
  return auth.patch("/users/" + id, userInfo).then(response => {
    return response.data;
  });
}

export function editUserBusiness(id, editBusiness) {
  return auth
    .patch("/users/" + id + "/business", editBusiness)
    .then(response => {
      return response.data;
    });
}

export function editUserTotalTicket(id, editTicket) {
  return auth
    .patch("/users/" + id + "/ticket/new", editTicket)
    .then(response => {
      return response.data;
    });
}

export function editTimeWorked(id, timeInfo) {
  return auth.patch("/users/" + id + "/worked", timeInfo).then(response => {
    return response.data;
  });
}

export function newUser(userInfo) {
  return auth.post("/users", userInfo).then(response => {
    return response.data;
  });
}

export function deleteUser(id) {
  return auth.delete("/users/" + id).then(response => {
    return response.data;
  });
}

// Profile

export function editProfile(id, profileInfo) {
  return auth.patch("/profile/" + id, profileInfo).then(response => {
    return response.data;
  });
}

// Vacation

export function getVacation() {
  return auth.get("/vacation").then(response => {
    return response.data;
  });
}

export function getSingleVacation(id) {
  return auth.get("/vacation/" + id).then(response => {
    return response.data;
  });
}

export function requestVacation(vacationInfo) {
  return auth.post("/vacation", vacationInfo).then(response => {
    return response.data;
  });
}

export function editVacationUser(id) {
  return auth.patch("/users/" + id + "/vacation").then(response => {
    return response.data;
  });
}

// Tickets

export function getTickets() {
  return auth.get("/tickets").then(response => {
    return response.data;
  });
}

export function getSingleTicket(id) {
  return auth.get("/tickets/" + id).then(response => {
    return response.data;
  });
}

export function newTicket(ticketInfo) {
  return auth.post("/tickets", ticketInfo).then(response => {
    return response.data;
  });
}

export function editTicket(id, ticketInfo) {
  return auth.patch("/tickets/" + id, ticketInfo).then(response => {
    return response.data;
  });
}

export function getTimelineUsers() {
  return auth.get("/timeline/users").then(response => {
    return response.data;
  });
}

export function getTimelineEntities() {
  return auth.get("/timeline/entities").then(response => {
    return response.data;
  });
}

export function getTimelineTickets() {
  return auth.get("/timeline/tickets").then(response => {
    return response.data;
  });
}
