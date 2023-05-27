
const baseURL = "http://localhost:8080/api/books";


export const getBooks = () => {
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

// export const postResult = (payload) => {
// 	return fetch(baseURL, {
// 		method: "POST",
// 		body: JSON.stringify(payload),
// 		headers: { "Content-Type": "application/json" },
// 	}).then((res) => {
// 		res.json();
// 	});
// };
