/*
Write a function subLength() that takes 2 parameters, a string and a single character.
The function should search the string for the two occurrences of the character and return the length between them including the 2 characters.
If there are less than 2 or more than 2 occurrences of the character the function should return 0.
*/


const subLength = (str,c) => {
    const list = str.split('');
    let idx = 0;
    let acc = 0;
    let count = 0;
    let length = 0;
    list.forEach(element => {
        if ( element === c){
            count++;
            if ( count === 2){
                acc = list.indexOf(element, idx+1) + 1;
                length = acc - idx;
            } else {
                idx = list.indexOf(element, idx);
                length = 0;
            }
        }
    });
    return length;
}

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
subLength('funny', 'n')