const router = require("express").Router();
const User = require("../db/users");

router.get("/getUsers", async (req, res) => {
	try {
		const allUsers = await User.findAll();
		res.json(allUsers);
	} catch (err) {
		console.error(err);
	}
});

router.post("/register", async (req, res) => {
	try {
		const newUser = await User.create(req.body);

		if (newUser.id) {
			res.json({
				isSuccess: true,
			});
		}
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;
