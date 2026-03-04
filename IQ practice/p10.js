/* Pyramid pattern in Javascript
    *
  *   *
 *  *  *
*  *  *  *
*  *  *  * *
*/

//need to check

let rows = 5;
let i=1;
 for (i = 1; i <= rows; i++) {
            // Print spaces before the stars
            for (let j = 1; j <= rows - i; j++) {
               console.log("  ");
            }
           // Print stars
            for (let k = 1; k <= 2 * i - 1; k++) {
                console.log("*".repeat(k));
            }
        }
    
