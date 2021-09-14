/*
For this project, you will build a message generator program.
Every time a user runs a program, they should get a new, randomized output.
You’re welcome to take the project in a couple of different forms,
like an astrology generator, inspirational message, or nonsensical jokes.
To make your program truly random, the message that it outputs should
 be made up of at least three different pieces of data.
 */

 const messages = [
                "A sure way to grow closer to Christ is to search out stories of His work in the lives of others"
                ,"All great art is the expression of man's delight in God's work, not his own"
                ,"Never forget the three most powerful resources you always have available to you: love, prayer, and forgiveness"
                ,"Through faith we understand, The things we cannot know, The hidden pattern God has planned, And why each thread is so."
                ,"Forgiveness is giving up the hope that the past could be any different. It's accepting the past for what it was and using this moment and this time to help yourself move forward"
                ,"The Easter message not only has to be believed, it has to be felt, for the mind alone cannot grasp it all"
                ,"What you see and what you hear depends a great deal on where you are standing. It also depends on what sort of person you are"
                ,"We do not know what God's plan is for us, but we know He has one. Our job is to pray, trust Him, and wait on His perfect timing."
                ,"God wants us to be ever moving forward so we can discover the fullness of the life He came to provide. And as people who follow Him, we want to go forward too"
];

function randomize(num){
    random = Math.floor(Math.random() * num);
    return random;
}

function createMessages(array){
    const count = array.length;
    text = array[randomize(count)] + '. ' + array[randomize(count)]  
    return text;
}

console.log(createMessages(messages));