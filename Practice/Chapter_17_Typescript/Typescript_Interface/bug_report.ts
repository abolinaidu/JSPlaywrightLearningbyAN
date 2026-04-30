import { log } from "node:console";

interface BugReport{
    id:number;
    title:string;
    description:string;
    severity: 'low' | 'medium' | 'high';
    status: 'open' | 'in progress' | 'closed';
    stepsToReproduce: string[];
}
function logBug(bug: BugReport): void {
    console.log(`Bug ID: ${bug.id}`);
    console.log(`Title: ${bug.title}`);
    console.log(`Description: ${bug.description}`);
    console.log(`Severity: ${bug.severity}`);
    console.log(`Status: ${bug.status}`);
    console.log("Steps to Reproduce:"); 
    bug.stepsToReproduce.forEach((step, index) => {
        console.log(`${index + 1}. ${step}`);
    });
}

logBug({
    id: 101,
    title: "Login button not working",  
    description: "The login button is not responding when clicked.",
    severity: "high",
    status: "open",
    stepsToReproduce: [
        "Navigate to the login page",
        "Enter valid credentials",
        "Click the login button"
    ]
});
