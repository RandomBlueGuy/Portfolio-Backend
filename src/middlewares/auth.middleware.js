const jwt = require("jsonwebtoken");
const Admin = require("../api/admin/admin.model");

const authMiddleware = async (req, res, next) => {
  try {
    const bearerTokenPattern =
      /^Bearer\s[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_.+\/=]*$/;

    if (!bearerTokenPattern.test(req.headers.authorization)) {
      throw new Error("Invalid token format!");
    }

    const [_, token] = req.headers.authorization.split(" ");
    const { id } = jwt.verify(token, process.env.ACCESS_KEY);

    const admin = await Admin.findById(id);

    if (!admin) {
      throw new Error("There is no admin with this id");
    }

    console.log("🔷 > -✔- < 🔷");
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: `Authorization process failed! ${error}` });
  }
};

module.exports = authMiddleware;
