const Sequelize = require("sequelize");
const db = require("./database");

const User = db.define("users", {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: true,
	},
});

module.exports = User;
