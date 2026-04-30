enum HTTTPMethod{
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE",
}

function sendRequest(method: HTTTPMethod, endpoint  : string): void {
    console.log(`Sending ${method} request to ${endpoint}` + " -->200 OK");
}

sendRequest(HTTTPMethod.Get, "/api/users");
sendRequest(HTTTPMethod.Post, "/api/users");    