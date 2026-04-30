function wrapResponse<T>(data: T, statusCode: number): {statusCode:number;data :T}
{
    return {
        data,
        statusCode,
    };
}

let userResponse = wrapResponse<string>("admin", 200);
console.log(userResponse);

let flagResponse = wrapResponse<boolean>(true, 200);
console.log(flagResponse);  

let countResponse = wrapResponse<number>(42, 200);
console.log(countResponse); 



