const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('./user.model');

module.exports = {
  //CREATE USER
  async signUp(req, res) {
    try {
      const { firstName, lastName, email, mobile } = req.body;

      // if (secretKey !== process.env.ACCESS_KEY) {
      //   throw new Error("INVALID ACCESS!");
      // }

      const otheruser = await user.findOne({ email });

      if (otheruser) {
        throw new Error('This email is already registered');
      }

      // const encPassword = await bcrypt.hash(password, 8);

      const user = await user.create({
        firstName,
        lastName,
        email,
        mobile,
        createdAt: `${new Date(Date.now()).toString()}`,
      });

      res.status(201).json({
        message: 'User Created Successfully',
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: `We couldn't create this user, ${error}`,
      });
    }
  },

  //LOG USER
  async signIn(req, res) {
    try {
      const { email, password } = req.body;

      const user = await user.findOne({ email });

      if (!user) {
        throw new Error('email or password invalid');
      }

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        throw new Error('email or password invalid');
      }

      const token = jwt.sign({ id: user._id }, process.env.ACCESS_KEY, {
        expiresIn: 3600,
      });

      res.status(200).json({ message: `Welcome back ${user.email}!`, token });
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  },

  //GET USER INFO
  async getUserData(req, res) {
    try {
      const users = await user.find();

      res.status(201).json({ message: 'Success!', users });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  // UPDATE USER
  async updateUserInfo(req, res) {
    try {
      const { userId } = req.params;
      const updatedData = req.body;

      const updatedUser = await user.findByIdAndUpdate(userId, updatedData, {
        new: true,
      });

      if (!updatedUser) {
        return res.status(404).json({ message: `There is no user with this Id inside the DB` });
      }

      res.status(200).json({ message: 'User updated', updatedUser });
    } catch (error) {
      res.status(500).json({
        message: "Sorry! We couldn't update the user",
      });
    }
  },

  //DELETE USER
  async deleteUser(req, res) {
    try {
      const { userId } = req.params;

      const result = await user.findByIdAndDelete(userId);
      const isDeleted = result ? true : false;

      if (result !== null) {
        res.status(200).json({ message: `User deleted successfully` });
      } else {
        throw new Error('User not found!');
      }
    } catch (error) {
      res.status(500).json({ message: `User deletion failed! ${error}` });
    }
  },
};
