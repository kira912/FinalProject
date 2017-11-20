import axios from "axios";

function errHandler(err) {
  console.error("API", err);
}
void errHandler;

const entities = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

export function getEntities() {
  return entities.get("/entities").then(response => {
    return response.data;
  });
}

export function newEntity(entityInfo) {
  return entities.post("/entities", entityInfo).then(response => {
    return response.data;
  });
}

export function editEntity(id, entityInfo) {
  return entities.patch("/entities/" + id, entityInfo).then(response => {
    return response.data;
  });
}

export function editEntityBusiness(id, editBusiness) {
  return entities
    .patch("/entities/" + id + "/business", editBusiness)
    .then(response => {
      return response.data;
    });
}

export function getSingleEntity(id) {
  return entities.get("/entities/" + id).then(response => {
    return response.data;
  });
}

export function deleteEntity(id) {
  return entities.delete("/entities/" + id).then(response => {
    return response.data;
  });
}
