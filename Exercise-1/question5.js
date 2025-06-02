//write a js program to create a new string add a "New!" in front of a given string. if already have 
// New! skip it and return string

const create_new_string = (str) => {
    let req = "New!";
    let curr="";
    for(let i=0;i<4;i++){
        curr += str[i];
    }
    if(req===curr){
        return ans;
    }else{
        req += str;
        return req;
    }
}

console.log(create_new_string("test"));
