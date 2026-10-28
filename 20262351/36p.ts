type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

function sendRequest(method: RequestMethod) {
    console.log(`Sending a ${method} request.`);
}

sendRequest("GET");
sendRequest("POST");

// sendRequest("FETCH"); // Error