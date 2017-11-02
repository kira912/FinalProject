console.log("mongo", process.env.MONGODB_URI);
require("dotenv").config();
console.log("mongo", process.env.MONGODB_URI);
const mongoose = require("mongoose");
const Entity = require("../models/entity");
const User = require("../models/user");

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

function getIdFromName(array, name) {
  const el = array.find(el => el.name === name);
  if (!el) throw Error(`Element of name ${name} not found`);
  return el._id;
}

function connect(uri) {
  return mongoose.connect(uri, {
    useMongoClient: true
  });
}

function cleanup() {
  return Entity.remove({}).then(() => User.remove({}));
}

function seedEntities() {
  const entities = [
    {
      name: "entity1",
      usersAttachment: ["directeur", "user1", "user2"]
    },
    {
      name: "entity2",
      usersAttachment: ["user3", "user4"]
    }
  ];
  return Entity.create(entities).then(createdEntities => {
    return {
      entities: createdEntities
    };
  });
}

function seedUsers(data) {
  const { entities } = data;
  const users = [
    {
      firstname: "Admin",
      email: "admin@gmail.com",
      role: "Admin"
    },
    {
      firstname: "directeur",
      email: "directeur@gmail.com",
      role: "Directeur",
      directorEntity: getIdFromName(entities, "entity1"),
      entityAttachment: getIdFromName(entities, "entity1")
    },
    {
      firstname: "user1",
      email: "user1@gmail.com",
      role: "Vendeur",
      entityAttachment: getIdFromName(entities, "entity1")
    },
    {
      firstname: "user2",
      email: "user2@gmail.com",
      role: "Vendeur",
      entityAttachment: getIdFromName(entities, "entity1")
    },
    {
      firstname: "user3",
      email: "user3@gmail.com",
      role: "Vendeur",
      entityAttachment: getIdFromName(entities, "entity2")
    },
    {
      firstname: "user4",
      email: "user4@gmail.com",
      role: "Vendeur",
      entityAttachment: getIdFromName(entities, "entity2")
    }
  ];

  const password = "ih";
  return Promise.all(
    users.map(user => {
      return new Promise((resolve, reject) => {
        User.register(user, password, err => {
          if (err) {
            reject(err);
          }
          resolve();
        });
      });
    })
  );
  /*   return User.register(users, password).then(createdUsers => {
    return Object.assign(
      {
        users: createdUsers
      },
      data
    );
  }); */
}

function disconnect() {
  return mongoose.connection.close();
}

connect("mongodb://localhost/intranetData")
  .then(cleanup)
  .then(seedEntities)
  .then(seedUsers)
  .catch(err => {
    console.log(err);
  })
  .then(disconnect);
