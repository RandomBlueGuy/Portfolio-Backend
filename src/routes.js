const admin = require("./api/admin")
// const user = require("./api/user");
// const offers = require("./api/offers");

const routes = (app) => {
  app.use("/api/admin", admin);
  // app.use("/api/user", user);
  // app.use("/api/offers", offers);
};

module.exports = routes;
