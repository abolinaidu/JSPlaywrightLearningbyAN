// Interface with optional and readonly for API response
interface APIResponse {
    readonly status: number;
    body: string;
    headers?: object; //Optional
    responseTime?: number;
}

// Readonly - can't modify the readonly
// ? - optional

let responses: APIResponse = {
    status: 200,
    body: '{"user": "admin"}',
};

console.log("Status:", responses.status);
console.log("Body:", responses.body);
console.log("Headers:", responses.headers);

console.log(" ---------------------------")

interface Point {
    readonly x: number;
    readonly y: number;
}
const point: Point = { x: 10, y: 20 };
// point.x = 5; This is not possible. 

// ReadonlyArray
interface Data {
    readonly items: readonly number[];
}