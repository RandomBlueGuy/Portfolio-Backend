require("dotenv").config();

const server = require("./app");
const PORT = 8080;

const startSever = () => {
  server.listen(PORT, () => {
    console.log(`🔷 / App running in PORT => ${PORT} 🔷`);
  });
};

setImmediate(startSever);

module.exports = server;