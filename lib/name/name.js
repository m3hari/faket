const names = require('../../dataset/names-dataset')
const Util = require('../util/util');
const MALE = 1;
const FEMALE = 2;

class Name {

    lastName() {
        let males = names.males;
        return males[Math.floor((Math.random() * males.length))]

    }

    firstName(gender) {
        let males = names.males;
        let females = names.females;

        if (typeof gender !== 'number') {
            gender = Util.random(0, 2);
        }
        if (gender == MALE) {
            return males[Util.random(0, males.length)]
        }
        return females[Util.random(0, females.length)]
    }

    fullName() {
        //TODO : this is highly inefficient fix it.
        let fn = this.firstName();
        let ln = this.lastName();
        while (ln === fn) {
            ln = this.lastName();
        }
        let familyName = this.lastName();
        while (ln === familyName) {
            familyName = this.lastName();
        }

        return fn + ' ' + ln + ' ' + familyName;
    }
}

module.exports = new Name()