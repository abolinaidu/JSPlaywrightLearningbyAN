let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);

/* Issue : As for suite2 shallow copy is created from suite1,
 but later the suite2-status value is upated which ultimately affects the suite1 status value.
 Fix : Deep copy - Need to clone the objects inside the array rather then the array itself
*/
