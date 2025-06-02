//write a js program to count the frequency of char which should be between 2 - 4 only 

const count_freq = (str,ch) => {
    const mp = {};
    for(const x of str){
        if(mp[x]) mp[x]++;
        else mp[x]=1;
    }
    return mp[ch]>=2 && mp[ch]<=4;
}

console.log(count_freq("ddivyam","d"));