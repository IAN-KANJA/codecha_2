const tutorials =[
    `The Quick Brown Fox`
];
const string=(upperCase) => {
    return tutorials.map(upperCase);

    function upperCase(sentence) {
        return sentence.split('').map(upperCased).join('');


    }
    function upperCased(eachWord) {
        return eachWord.slice(0, 0) + eachWord.charAt(1, 4).toUpperCase();
    }
}
console.log(string)

