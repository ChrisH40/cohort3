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

    assertEquals: (p1, p2) => {
        if (p1 === p2) 
            return true;
        else console.log("***the two values are not the same:\n   p1--> " + p1 + "\n   p2--> " + p2);
            return false;
    },

    // and before this comment ---

    // --- end daily 1 ---
    // --- begin daily 2 ---
        //Write a function to format an email based on an array.


    makeEmailArr: (name) => {
        return String(name[0].toLowerCase() + "." + name[1].toLowerCase() + "@evolveu.ca");
    },

    // --- end daily 2 ---
    // --- begin daily 3 ---
        // Write a function to format an email based on an object / map

    makeEmailObj: (name) => {
        return String(name.fname.toLowerCase() + "." + name.lname.toLowerCase() + "@evolveu.ca");
    }

    // --- end daily 3 ---

};

export default functions;





