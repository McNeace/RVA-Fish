// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
let bcrypt = require("bcryptjs");
let Sequelize = require("sequelize");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {

        comment: {
            type: DataTypes.STRING
        }

    });
    return Fish;



};  // end of export
