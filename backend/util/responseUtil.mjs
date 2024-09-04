export function generateConflictResponse(message) {
	return generateApiResponse(409, "Conflict", message);
}

export function generateSignupSuccessResponse(id) {
	return {
		id: id,
		apiMessage: generateApiResponse(
			201,
			"Created",
			"User signed up successfully"
		),
	};
}

export function generateInternalServerErrorResponse(id) {
	return generateApiResponse(
		500,
		"Internal Server Error",
		"There was an internal server error. Please try again later"
	);
}

export function generateLoginSuccessResponse(token) {
	return {
		token: token,
		apiResponse: generateApiResponse(200, "Success", "Login successful"),
	};
}

export function generateLoginFailureResponse() {
	return generateApiResponse(
		401,
		"Unauthorized",
		"Entered incorrect username or password"
	);
}

function generateApiResponse(code, type, message) {
	return { code, type, message };
}
