function getStatus(code: 200): "Success";
function getStatus(code: 404): "Not Found";
function getStatus(code: 500): "Server Error";

function getStatus(code: number): string {
    switch (code) {
        case 200:
            return "Success";
        case 404:
            return "Not Found";
        case 500:
            return "Server Error";
        default:
            return "Unknown Status";
    }
}

console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(500));