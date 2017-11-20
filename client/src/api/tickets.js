import axios from "axios";

const tickets = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

export function getTickets() {
  return tickets.get("/tickets").then(response => {
    return response.data;
  });
}

export function getSingleTicket(id) {
  return tickets.get("/tickets/" + id).then(response => {
    return response.data;
  });
}

export function newTicket(ticketInfo) {
  return tickets.post("/tickets", ticketInfo).then(response => {
    return response.data;
  });
}

export function editTicket(id, ticketInfo) {
  return tickets.patch("/tickets/" + id, ticketInfo).then(response => {
    return response.data;
  });
}
