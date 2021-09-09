/*
Write a function groceries() that takes an array of object literals of grocery items.
The function should return a string with each item separated by a comma except the last
 two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
*/


const groceries = (array) => {
    const len = array.length;
    let count = 0;
    let str = '';

    array.forEach(element => {
        count++;
        if (len - count > 1 ){
            str += element['item']
            str += ', '
        } else if (len - count > 0 ){
            str += element['item']
            str += ' and '
        } else {
            str += element['item']
        }
    })
    return str
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'