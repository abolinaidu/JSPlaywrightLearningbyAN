enum Browser {
    Chrome = "Chrome",
    Firefox = "Firefox",
    Safari = "Safari",
    Edge = "Edge",
    Opera = "Opera",
}
console.log("Selected Browser:", Browser.Chrome);

function launchBrowser(browser: Browser): void {
    switch (browser) {
        case Browser.Chrome:
            console.log("Launching Chrome...");
            break;
        case Browser.Firefox:
            console.log("Launching Firefox...");
            break;
        case Browser.Safari:
            console.log("Launching Safari...");
            break;
        case Browser.Edge:
            console.log("Launching Edge...");
            break;
        case Browser.Opera:
            console.log("Launching Opera...");
            break;
    }
}


launchBrowser(Browser.Chrome);
launchBrowser(Browser.Firefox); 