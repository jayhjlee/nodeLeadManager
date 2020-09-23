const bcrypt = require("bcrypt");
const router = require("express").Router();
const User = require("../db/users");

const saltRounds = 10;

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
		const { password } = req.body;
		const newUser = await User.create(req.body);

		if (newUser.id) {
			bcrypt.hash(password, saltRounds, async (err, hash) => {
				const hashedPassword = { password: hash };
				const createdUser = await User.findByPk(newUser.id);

				if (createdUser.id === newUser.id) {
					const userWithHash = await User.update(hashedPassword, {
						where: {
							id: createdUser.id,
						},
					});

					if (userWithHash.length) {
						res.json({
							isSuccess: true,
						});
					}
				}
			});
		}
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;
