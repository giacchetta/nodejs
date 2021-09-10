const lodash = require('lodash');

const _ = {
    clamp(number,lower,upper){
        const lowerClampedValue = Math.max(number,lower);
        const clampedValue = Math.min(lowerClampedValue,upper);
        return clampedValue;
    },
    inRange(number, start, end){
        if (!end){
            end = start;
            start = 0;
        }
        if (start > end){
            let temp = end;
            end = start;
            start = temp;
        }
        let isInRange = Boolean((start <= number) && (number < end));
        return isInRange;
    },
    words(string){
        let words = string.split(' ');
        return words;
    },
    pad(string,length){
        if (length <= string.length){
            return string;
        }
        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = lodash.repeat(' ',startPaddingLength) + string + lodash.repeat(' ',endPaddingLength);
        return paddedString;
    },
    has(object,key){
        let hasValue = Boolean(lodash.has(object,key));
        return hasValue;
    },
    invert(object){
        let invertedObject = {};
        for (const key in object) {
            let originalValue = object[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    },
    findKey(object,predicate){
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                const value = object[key];
                const predicateReturnValue = predicate(value);
                if (predicateReturnValue){
                    return key;
                }
            }
        }
        return undefined;
    },
    drop(array,n){
        if (!n){
            n = 1;
        }
        let droppedArray = array.slice(n);
        return droppedArray;
    }
}




// Do not write or modify code below this line.
module.exports = _;
