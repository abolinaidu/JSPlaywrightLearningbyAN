let isLoggedIn = true;
;let userRole = "editor";
if (isLoggedIn) {
    console.log("Welcome back, user!");
    if (userRole === "admin") {
        console.log("You have admin privileges.");
    } else if (userRole === "editor") {
        console.log("You have editor privileges.");
    } else {
        console.log("You have basic user privileges.");
    }
} else {
    console.log("Please log in to continue.");
}