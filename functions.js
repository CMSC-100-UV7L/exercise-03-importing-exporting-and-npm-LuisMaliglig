const fs = require("fs");
const validator = require("validator");
const uuid = require("uuid");
const { type } = require("os");

//function for unique ID
function generateUniqueID(firstName, lastName){
    const letter = firstName.charAt(0).toLowerCase(); //takes first letter and converts to lowercase
    const name = lastName.toLowerCase(); //converts last name to lowercase
    const uniqueString = uuid.v4().split("-")[0]; //generated uuid will be separated prior to first hyphen, thus giving 8 characters
    return '${letter}${name}${uniqueString}';
}

function addAccount(firstName, lastName, email, age){
    if (!firstName || !lastName || !email || !age){ //checks if any field is empty
        return "Please fill out all fields";
    }
    if(typeof firstName !== "string" || typeof lastName !== "string" || typeof email !== "string" || typeof age !== "number"){ //checks for validity of input
        return "Invalid field type(s)";
    }
    if(firstName.length == 0 || lastName.length == 0){ //makes sure last name and first name are non-empty strings
        return "Name fields must not be empty";
    }
    if(!validator.isEmail(email)){ //validates email format
        return "Invalid email format";
    }
    if(age<18){ //checks if age is less than 18
        return "Age must be at least 18";
    }

    const id = generateUniqueID(firstName,lastName);
    const user = '${firstName},${lastName},${email},${age},${id}'; //concatenates string
    return fs.appendFileSync("users.txt", user + "\n"); //adds user data to users.txt
}

module.exports = {generateUniqueID, addAccount}; //ensures functions can be called by other files