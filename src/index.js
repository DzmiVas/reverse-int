module.exports = function reverse (n) {

    let nStr = n.toString();
    let reversedStr = '';
    for (let i = nStr.length - 1; i >= 0; i--) {
        reversedStr += nStr[i];
    }
     return parseInt(reversedStr);
}
    
    