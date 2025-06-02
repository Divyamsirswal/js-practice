//write a js program to ge the current date.
//expected -> mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const get_current_date = () => {
    return new Date().toLocaleDateString();
}

console.log(get_current_date());


