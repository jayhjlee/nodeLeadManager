const Sequelize = require("sequelize");
const db = require("./database");

const Lead = db.define("leads", {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	age: {
		type: Sequelize.INTEGER,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	isDelete: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
	},
});

module.exports = Lead;
