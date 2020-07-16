// This is the place where all relationships are defined between models.

const db = require("./database");
const Lead = require("./leads");
const User = require("./users");

Lead.belongsTo(User);

module.exports = {
	db,
	Lead,
	User,
};
