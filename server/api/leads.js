const router = require("express").Router();
const Lead = require("../db/leads");

router.get("/getLeads", async res => {
	try {
		const allLeads = await Lead.findAll();
		res.json(allLeads);
	} catch (err) {
		console.error(err);
	}
});

router.post("/createLead", async (req, res) => {
	try {
		const newLead = await Lead.create(req.body);

		if (newLead.id) {
			res.json({
				isSuccess: true,
			});
		}
	} catch (err) {
		console.error(err);
	}
});

router.put("/:id", async (req, res) => {
	try {
		const existingLead = await Lead.findById({
			where: {
				id: req.params.id,
			},
		});

		if (existingLead) {
			const updatedLead = await Lead.update(req.body);

			if (updatedLead.id) {
				res.json({
					isSuccess: true,
				});
			}
		}
	} catch (err) {
		console.error(err);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const deletedLead = await Lead.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (!deletedLead.id) {
			res.json({
				isSuccess: true,
			});
		}
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;
