const MAX_INT = 10000;
const MIN_INT = 0;

class Util {


    random(min = MIN_INT, max = MAX_INT) {
        if (typeof min != 'number') {
            min = MIN_INT;
        }
        if (typeof max != 'number') {
            max = MAX_INT;
        }
        return Math.floor((Math.random() * (max - min) + min));

    }
}

module.exports = new Util();