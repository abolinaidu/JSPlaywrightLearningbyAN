/*Build Test Users from Arrays
Write a JavaScript function that receives two arrays: one with names and one with roles.
 Return a new array of user objects in the format `{ username, email, role }`.
  The username should be lowercase with spaces replaced by underscores, and the email should use the domain `@playwrightbatch.com`.
*/

let names = ["Amit Kumar", "Neha Singh"];
let roles = ["admin", "viewer"];

function buildTestUsers(names, roles) {
  if (names.length !== roles.length) {
    throw new Error("Names and roles arrays must be the same length");
  }

  return names.map((name, index) => {
    const username = name.toLowerCase().replace(/\s+/g, "_");
    const email = `${username}@playwrightbatch.com`;
    return {
      username,
      email,
      role: roles[index]
    };
  });
}


const testUsers = buildTestUsers(names, roles);
console.log(testUsers);
