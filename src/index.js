function firstOrder(number) {
    switch(number) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        default:
            break;
    }
}

function secondOrder(number) {
    var num = parseInt(number.toString()[0]);
    if (number < 20) {
        switch(number) {
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
            default:
                break;
        }
    }
    switch(num) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
        default:
            break;
    }
}

function thirdOrder(number) {
    var num = parseInt(number.toString()[0]);
    switch(num) {
        case 1:
            return 'one hundred';
        case 2:
            return 'two hundred';
        case 3:
            return 'three hundred';
        case 4:
            return 'four hundred';
        case 5:
            return 'five hundred';
        case 6:
            return 'six hundred';
        case 7:
            return 'seven hundred';
        case 8:
            return 'eight hundred';
        case 9:
            return 'nine hundred';
        default:
            break;
    }
}

module.exports = function toReadable(number) {
    var num = number.toString();
    var length = number.toString().length;
    var secondAndThird = parseInt(num[1] + "" + num[2]);
    if (length == 1) {
        return firstOrder(parseInt(num[0]));
    }
    else if (length == 2 && num[1] == 0 || number < 20) {
        return secondOrder(number);
    }
    else if (length == 2 && number > 20) {
        return secondOrder(number) + " " + firstOrder(parseInt(num[1]));
    }
    else if (length == 3 && num[1] == 0 && num[2] == 0) {
        return thirdOrder(number);
    }
    else if (length == 3 && num[1] != 0 && num[2] == 0) {
        return thirdOrder(number) + " " + secondOrder(secondAndThird);
    }
    else if (length == 3 && num[1] == 0 && num[2] != 0) {
        return thirdOrder(number) + " " + firstOrder(parseInt(num[2]));
    }
    else if (length == 3 && num[1] != 0 && num[2] != 0 && secondAndThird < 20) {
        return thirdOrder(number) + " " + secondOrder(secondAndThird) 
    }
    else {
        return thirdOrder(number) + " " + secondOrder(secondAndThird) + " " + firstOrder(parseInt(num[2]));
    }
    
}
