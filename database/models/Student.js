/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type:Sequelize.STRING,
    defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },

  campusId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },

  gpa: {
    type: Sequelize.FLOAT,
    allowNull: true,
    validate: {
      min: 0,
      max: 4
    }
  }
});

// Export the student model
module.exports = Student;