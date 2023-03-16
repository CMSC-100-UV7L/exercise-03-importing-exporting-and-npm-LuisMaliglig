const fs = require("fs");
const validator = require("validator");
const uuid = require("uuid");
const { type } = require("os");

function generateUniqueID(firstName, lastName){
    const letter = firstName.charAt(0).toLowerCase();
    const name = lastName.toLowerCase();
    const uniqueString = uuid.v4().split("-")[0];
    return '${letter}${name}${uniqueString}';
}

function addAccount(firstName, lastName, email, age){
    if (!firstName || !lastName || !email || !age){
        return "Please fill out all fields";
    }
    if(typeof firstName !== "string" || typeof lastName !== "string" || typeof email !== "string" || typeof age !== "number"){
        return "Invalid field type(s)";
    }
    if(firstName.length == 0 || lastName.length == 0){
        return "Name fields must not be empty";
    }
    if(!validator.isEmail(email)){
        return "Invalid email format";
    }
    if(age<18){
        return "Age must be at least 18";
    }

    const id = generateUniqueID(firstName,lastName);
    const user = '${firstName},${lastName},${email},${age},${id}';
    return fs.appendFileSync("users.txt", user + "\n");
}

module.exports = {generateUniqueID, addAccount};