function getStatus(
    code: 200 | 404 | 500
): "Success" | "Not Found" | "Server Error" {
    switch (code) {
        case 200:
            return "Success";
        case 404:
            return "Not Found";
        case 500:
            return "Server Error";
    }
}

console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(500));