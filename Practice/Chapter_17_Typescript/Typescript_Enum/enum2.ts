enum Severity{
    Low,
    Medium,
    High,
    Critical
}

console.log("Severity Levels:",Severity.High);

function logSeverity(level: Severity): boolean {
return level >= Severity.High;

}

console.log("Is High Severity?", logSeverity(Severity.High));
console.log("Is Medium Severity?", logSeverity(Severity.Medium));   



