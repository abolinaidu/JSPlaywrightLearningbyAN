interface StringDictionary {
    [key: string]: string;
}       
let myDict: StringDictionary = {
    "firstName": "John",
    "lastName": "Doe",
    "email": "John_doe@gmail.com",
};

// String index

interface String1Dictionary {
    [key: string]: string;
}

const dict: String1Dictionary = {
    hello: "world",
    foo: "bar"
};