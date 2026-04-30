class APILCient{
    constructor(baseurl){
        this.baseurl=baseurl;
    }       
    get(endpoint){
        console.log('Making a GET request to ' + this.baseurl + endpoint);
    }   
    post(endpoint, data){
        console.log('Making a POST request to  ' + this.baseurl + endpoint + 'with data' + JSON.stringify(data));
    }       
}

let client = new APILCient('https://www.appvwo.com');
client.get('/api/v1/users');
client.post('/api/v1/users', { name: 'Aboli', age: 30 });
//this keyword refers to current object. It is used to access the properties and methods of the current object. It is used inside a class to refer to the current object. It is used to access the properties and methods of the current object. It is used inside a class to refer to