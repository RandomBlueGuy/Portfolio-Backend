const admin = require("./api/admin")
const posts = require("./api/post");
// const offers = require("./api/offers");

const routes = (app) => {
  app.use("/api/admin", admin);
  app.use("/api/posts", posts);
  // app.use("/api/offers", offers);
};

module.exports = routes;
