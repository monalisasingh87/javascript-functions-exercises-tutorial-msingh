// Your code goes here
const rapid = (str) => {
    str = str.toLowerCase();
    let newStr=''; 

    for (let i= 0; i < str.length; i++){
      if (str[i] !='a' && str[i] != 'e' && str[i] != 'i' && str[i] !='o' && str[i]!= 'u') 
        { 
            newStr += str[i].toUpperCase();
        } 

    }
    return newStr;
};
// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
