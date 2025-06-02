//write a js program to find out the which of the two value is closest to 100

const which_is_close = (a,b) => {
    let f = 100-Number(a);
    let s = 100-Number(b);
    
    if(f > s){
        return b;
    }else{
        return a;
    }
}

console.log(which_is_close(80,23));