import { stringLiteral } from "@babel/types";

const functions = {

// --- begin daily 1 ---

    /*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---

assertEquals: (p1,p2) => {
    if (p1 === p2) return true;
    else return console.log("***the two values are not the same:\n   p1--> " + p1 + "\n   p2--> " + p2), 
    false;
    },

// and before this comment ---

// Used this for the test functions:

// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value");

// --- end daily 1 ---

// --- begin daily 2 ---

makeEmailArr: (name) => {
    return String(name[0].toLowerCase() + "." + name[1].toLowerCase() + "@evolveu.ca"); 
}

// --- end daily 2 ---

};

export default functions;





