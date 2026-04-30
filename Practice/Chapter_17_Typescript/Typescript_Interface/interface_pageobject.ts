interface BasePage2 {
    url: string;
    title: string;
}

interface LoginPage2 extends BasePage2 {
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}
interface FreeTrailPage2 extends BasePage2 {
    usernameSelector: string;
    submitButtonSelector: string;
}


let loginPage1: LoginPage2 = {
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-btn"
}

let freeTrialPage: FreeTrailPage2 = {
    url: "/free-trial",
    title: "Free Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit",
}

console.log("URL:", loginPage1.url);
console.log("Title:", loginPage1.title);
console.log("Username field:", loginPage1.usernameSelector);

console.log(" ------- ");


console.log("URL:", freeTrialPage.url);
console.log("Title:", freeTrialPage.title);
console.log("Username field:", freeTrialPage.usernameSelector);