class Browser{
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log('Browser launched:' + this.name)
    }
    startBrowser(){
        console.log('Starting the browser' + this.name);
}
    closeBrowser(){
        console.log('Closing the browser' + this.name);
    }   
}

let chrome = new Browser('Google Chrome');
chrome.startBrowser();
chrome.closeBrowser();
//this keyword refers to current object. It is used to access the properties and methods of the current object. It is used inside a class to refer to the current object. It is used to access the properties and methods of the current object. It is used inside a class to refer to