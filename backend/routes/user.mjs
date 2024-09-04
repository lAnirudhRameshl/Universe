import { Router } from "express";

import db from "../db/conn.mjs";

import {
	generateConflictResponse,
	generateSignupSuccessResponse,
	generateInternalServerErrorResponse,
	generateLoginSuccessResponse,
	generateLoginFailureResponse,
} from "../util/responseUtil.mjs";
import { USER_CONFLICT } from "../constants.mjs";

const router = Router();

const COLLECTION_NAME = "users";

router.post("/signup", async (req, res) => {
	const { email, phoneNumber } = req.body;

	try {
		let userCollection = db.collection(COLLECTION_NAME);
		let userWithExistingEmail = await userCollection.findOne({
			email: email,
		});
		let userWithExistingPhoneNumber = await userCollection.findOne({
			phoneNumber: phoneNumber,
		});

		if (userWithExistingEmail || userWithExistingPhoneNumber) {
			res.status(409).send(generateConflictResponse(USER_CONFLICT));
		} else {
			let result = await userCollection.insertOne(req.body);
			res.status(201).send(
				generateSignupSuccessResponse(result.insertedId)
			);
		}
	} catch (e) {
		res.status(500).send(generateInternalServerErrorResponse());
	}
});

router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		let userCollection = db.collection(COLLECTION_NAME);
		let dbUser = await userCollection.findOne({
			email: email,
			password: password,
		});

		if (dbUser) {
			res.status(200).send(generateLoginSuccessResponse());
		} else {
			res.status(401).send(generateLoginFailureResponse());
		}
	} catch (e) {
		res.status(500).send(generateInternalServerErrorResponse());
	}
});

export default router;
