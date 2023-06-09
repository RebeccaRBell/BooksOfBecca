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

export const registerUser = (url, payload) => {
	  return fetch(url, {
			method: "POST",
			headers: { 
				Accept: "application/json",
				"Content-type": "application/json" },
			body: JSON.stringify(payload),
		});
}
