//Readonly property - cannot be modified

interface APIResponse {
    readonly status: number;
    body : string;
    error?: string; // Optional property
}
    interface Point{
        readonly x: number;
        readonly y: number;
    }
    const point1: Point = { x: 10, y: 20 };
    // point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property. 
    console.log(`Point coordinates: (${point1.x}, ${point1.y})`);


    //REadonly array
    const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5]; 
    // numbers.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'.
    console.log("Numbers:", numbers);
        