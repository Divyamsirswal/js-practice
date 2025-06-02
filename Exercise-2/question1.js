//write a js program to create a new string from a given string taking the first 3 chars and the last
// 3 chars (string must be greater than or equal to 3) if not return the original string


const generate_string = (str) =>{ 
    if(str.length < 3){
        return str;
    }
    return str.slice(0,3) + str.slice(-3);
}

console.log(generate_string("divfasdfdssfdasdfyam"));