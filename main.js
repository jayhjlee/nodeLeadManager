// This is our node server entry point.

const { db } = require("./server/db");
const app = require("./server");

const PORT = 8080;

db.sync({ alter: true }).then(() => {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
});
