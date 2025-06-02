//write a js program to extract the first half of a string of even length

const extract_string = (str) =>{ 
    if(str.length & 1){
        return str;
    }

    return str.slice(0,str.length/2);
}

console.log(extract_string("divdfyam"));