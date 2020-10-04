module.exports = function toReadable (number) {
    const dictionaryOneNumber = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
    };

    const dictionaryTwoNumber = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    //745
    let firstNumber = Math.floor(number / 100);//7
    let firstRest = number % 100;//45
    let secondNumber = Math.floor(firstRest / 10);//5
    let secondRest = firstRest % 10;//4
    let hundred = `${dictionaryOneNumber[firstNumber]} hundred`;//для тысяч

    if (number === 0) return "zero";
    if (number < 21) return dictionaryOneNumber[number];
    if (number < 100 && secondRest === 0)
        return dictionaryTwoNumber[number / 10];
    if (number < 100)
        return `${dictionaryTwoNumber[secondNumber]} ${dictionaryOneNumber[secondRest]}`;
    if (firstRest === 0) return hundred;
    if (firstRest < 21) return `${hundred} ${dictionaryOneNumber[firstRest]}`;
    if (secondRest === 0)
        return `${hundred} ${dictionaryTwoNumber[secondNumber]}`;

    return `${hundred} ${dictionaryTwoNumber[secondNumber]} ${dictionaryOneNumber[secondRest]}`;
};


