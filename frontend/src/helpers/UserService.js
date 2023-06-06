const baseURL = "http://localhost:8080/api/users";

export const getUsers = () => {
	return fetch(baseURL, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
		},
	});
};
