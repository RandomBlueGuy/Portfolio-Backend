const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("./admin.model");

module.exports = {
  //CREATE USER
  async signUp(req, res) {
    try {
      const {
        firstName,
        lastName,
        userName,
        password,
        location,
        profilePicture,
        secretKey,
      } = req.body;

      if (secretKey !== process.env.ACCESS_KEY) {
        throw new Error("INVALID ACCESS!");
      }

      const otherAdmin = await Admin.findOne({ userName });

      if (otherAdmin) {
        throw new Error("This userName is already registered");
      }

      const encPassword = await bcrypt.hash(password, 8);

      const admin = await Admin.create({
        firstName,
        lastName,
        userName,
        password: encPassword,
        location,
        profilePicture,
      });

      res.status(201).json({
        message: "User Created Successfully",
        admin,
      });
    } catch (error) {
      res.status(400).json({
        message: "We couldn't create this user",
        error: error.message,
      });
    }
  },

  //LOG USER
  async signIn(req, res) {
    try {
      const { email, password } = req.body;

      const admin = await Admin.findOne({ userName });

      if (!admin) {
        throw new Error("UserName or password invalid");
      }

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        throw new Error("UserName or password invalid");
      }

      const token = jwt.sign({ id: user._id }, process.env.ACCESS_KEY, {
        expiresIn: 60 * 60 * 24,
      });

      res
        .status(200)
        .json({ message: `Welcome back ${user.userName}!`, token });
    } catch (error) {
      res.status(400).json({
        message:
          "Login unsuccessful! The information provided doessn't have a match in our DB",
      });
    }
  },

  //GET USER INFO
  async getUserData(req, res) {
    try {
      // if (req.body.secretKey === process.env.ACCESS_KEY) {
      //   throw new Error("INVALID ACCESS!");
      // }

      const users = await Admin.find();

      res.status(201).json({ message: "Success", users });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // UPDATE USER
  async updateUserInfo(req, res) {
    try {
      const { userId } = req.params;
      const updatedData = req.body;

      const updatedUser = await Admin.findByIdAndUpdate(userId, updatedData, {
        new: true,
      });

      if (!user) {
        return res
          .status(404)
          .json({ message: `There is no user with this Id inside the DB` });
      }

      res.status(200).json({ message: "User updated", updatedUser });
    } catch (error) {
      res.status(400).json({
        message: "Sorry! We couldn't update the user",
      });
    }
  },
};
