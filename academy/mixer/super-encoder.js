const encryptors = require('./encryptors.js');

const {caesarCipher, symbolCipher, reverseCipher } = encryptors;


const encodeMessage = (str) => {
    const caesar = caesarCipher(str, 20);
    const symbol = symbolCipher(caesar);
    return reverseCipher(symbol);
  }
  
  const decodeMessage = (str) => {
    const reverse = reverseCipher(str);
    const symbol = symbolCipher(reverse);
    const caesar = caesarCipher(symbol, -20);
    return caesar;
    
  }
  
  // User input / output.
  
  const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
      output = encodeMessage(str);
    } 
    if (process.argv[2] === 'decode') {
      output = decodeMessage(str);
    } 
    
    process.stdout.write(output + '\n');
    process.exit();
  }
  
  // Run the program.
  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  process.stdin.on('data', handleInput);