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
            gender = Util.random(MALE, FEMALE + 1);
        }
        if (gender == MALE) {
            return males[Util.random(0, males.length)]
        }
        return females[Util.random(0, females.length)]
    }

    fullName(gender) {
        //TODO : this is highly inefficient fix it.
        let fn = this.firstName(gender);
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
    prefix(gender) {
        if (typeof gender !== 'number') {
            gender = Util.random(MALE, FEMALE + 1)
        }
        let malesPrefix = names.malesPrefix;
        let femalesPrefix = names.femalesPrefix;
        if (gender == MALE) {
            return malesPrefix[Util.random(0, malesPrefix.length)]
        }
        return femalesPrefix[Util.random(0, femalesPrefix.length)]

    }
}

module.exports = new Name()