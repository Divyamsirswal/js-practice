//write a js program to concatinate two strings except their first character

const result_string = (a,b) => {
    if(a.length < 2 && b.length < 2){
        return a+b;
    }
    return a.slice(1) + b.slice(1);
}

console.log(result_string("testing","here"));