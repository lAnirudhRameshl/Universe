import { MongoClient, ServerApiVersion } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

let conn;
try {
	conn = await client.connect();
} catch (e) {
	console.log(e);
}
let db = conn.db("universe");

export default db;
