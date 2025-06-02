//to replace every character in a given string with the character following is in the alphabet


const shift_character = (str) => {
    return str
          .split('')
          .map(char => String.fromCharCode(char.charCodeAt(0)+1))
          .join('');
}

console.log(shift_character("divyam"));