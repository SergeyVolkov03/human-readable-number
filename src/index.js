module.exports = function toReadable(number) {
    let result = "";

    const numberToString = number.toString();

    function getOneNumber(number) {
        switch (number) {
            case "1":
                result += "one";
                break;
            case "2":
                result += "two";
                break;
            case "3":
                result += "three";
                break;
            case "4":
                result += "four";
                break;
            case "5":
                result += "five";
                break;
            case "6":
                result += "six";
                break;
            case "7":
                result += "seven";
                break;
            case "8":
                result += "eight";
                break;
            case "9":
                result += "nine";
                break;
        }
    }

    function getTwoNumber(number) {
        switch (number) {
            case "2":
                result += "twenty";
                break;
            case "3":
                result += "thirty";
                break;
            case "4":
                result += "forty";
                break;
            case "5":
                result += "fifty";
                break;
            case "6":
                result += "sixty";
                break;
            case "7":
                result += "seventy";
                break;
            case "8":
                result += "eighty";
                break;
            case "9":
                result += "ninety";
                break;
        }
    }

    function getTenNumber(number) {
        switch (number) {
            case "10":
                result += "ten";
                break;
            case "11":
                result += "eleven";
                break;
            case "12":
                result += "twelve";
                break;
            case "13":
                result += "thirteen";
                break;
            case "14":
                result += "fourteen";
                break;
            case "15":
                result += "fifteen";
                break;
            case "16":
                result += "sixteen";
                break;
            case "17":
                result += "seventeen";
                break;
            case "18":
                result += "eighteen";
                break;
            case "19":
                result += "nineteen";
                break;
        }
    }

    function getHundredNumber(number) {
        getOneNumber(number);
        result += " hundred";
    }

    if (numberToString.length === 1) {
        if (numberToString === "0") {
            result += "zero";
        } else {
            getOneNumber(numberToString);
        }
    } else if (numberToString.length === 2) {
        if (numberToString[0] === "1") {
            getTenNumber(numberToString);
        } else if (numberToString[1] === "0") {
            getTwoNumber(numberToString[0]);
        } else {
            getTwoNumber(numberToString[0]);
            result += " ";
            getOneNumber(numberToString[1]);
        }
    } else {
        getHundredNumber(numberToString[0]);
        if (numberToString[1] === "1") {
            result += " ";
            getTenNumber(numberToString.slice(1, 3));
        } else if (numberToString[1] === "0" && numberToString[2] === "0") {
            result += "";
        } else if (numberToString[1] === "0") {
            result += " ";
            getOneNumber(numberToString[2]);
        } else if (numberToString[2] === "0") {
            result += " ";
            getTwoNumber(numberToString[1]);
        } else {
            result += " ";
            getTwoNumber(numberToString[1]);
            result += " ";
            getOneNumber(numberToString[2]);
        }
    }

    return result;
};
