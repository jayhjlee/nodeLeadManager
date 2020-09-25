const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");
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

router.post("/auth", async (req, res) => {
	try {
		const { token } = req.body;
		const decode = jwtDecode(token);

		const { email } = decode;

		jwt.verify(token, email, (err, authData) => {
			if (err) {
				res.sendStatus(403);
			} else {
				res.json({
					isSuccess: true,
					authData,
					token,
				});
			}
		});
	} catch (err) {}
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

router.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		const existingUser = await User.findOne({
			where: {
				username: username,
			},
		});

		const { email } = existingUser;
		const payload = { username, email, timeStamp: Date.now() };

		if (existingUser.id) {
			const hashedPassword = existingUser.password;

			bcrypt.compare(password, hashedPassword, (err, result) => {
				const token = jwt.sign(payload, email, { expiresIn: 60 * 60 });

				res.json({ isSuccess: result, token });
			});
		}
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;
