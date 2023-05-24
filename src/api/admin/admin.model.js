const { Schema, model, models } = require("mongoose");

const adminSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "You need to have a valid firstName"],
    maxlength: [15, "The first name provided is too long"],
  },

  lastName: {
    type: String,
    required: [true, "You need to have a valid firstName"],
    maxlength: [15, "The first name provided is too long"],
  },

  userName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  location: {
    type: String,
  },

  profilePicture: {
    type: String,
  },
});

const Admin = model("admin", adminSchema);

module.exports = Admin;
