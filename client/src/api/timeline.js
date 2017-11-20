import axios from "axios";

function errHandler(err) {
  console.error("API", err);
}
void errHandler;

const timeline = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

export function getTimelineUsers() {
  return timeline.get("/timeline/users").then(response => {
    return response.data;
  });
}

export function getTimelineEntities() {
  return timeline.get("/timeline/entities").then(response => {
    return response.data;
  });
}

export function getTimelineTickets() {
  return timeline.get("/timeline/tickets").then(response => {
    return response.data;
  });
}
