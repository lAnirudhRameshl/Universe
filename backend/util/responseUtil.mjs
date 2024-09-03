export function generateConflictResponse(message) {
	return {
		code: 409,
		type: "Conflict",
		message: message,
	};
}

export function generateSignupSuccessResponse(id) {
	return {
		id: id,
		apiMessage: {
			code: 201,
			type: "Created",
			message: "User signed up successfully",
		},
	};
}

export function generateInternalServerErrorResponse(id) {
	return {
		code: 500,
		type: "Internal Server Error",
		message: "There was an internal server error. Please try again later",
	};
}
