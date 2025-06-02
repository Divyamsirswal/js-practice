//to get the file extension of any file 

const get_file_extension = (str) => {
    return str.slice(str.lastIndexOf('.'));
}

console.log(get_file_extension("test.png"));