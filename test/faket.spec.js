const names = require('../dataset/names-dataset');
const faket = require('../faket')
const expect = require('chai').expect;


const MALE = 1;
const FEMALE = 2;

describe('Faket', function () {
    describe('name', function () {
        before(function () {})
        describe('firstName', function () {
            it('should return random name from names dataset', function () {
                let data = [...names.males, ...names.females];
                let result = faket.name.firstName();
                let index = data.indexOf(result);
                expect(index).to.be.above(-1);
            });

            it('should return male name', function () {
                let data = names.males;
                let result = faket.name.firstName(MALE);
                let index = data.indexOf(result);
                expect(index).to.be.above(-1);
            });
            it('should return female name', function () {
                let data = names.females;
                let result = faket.name.firstName(FEMALE);
                let index = data.indexOf(result);
                expect(index).to.be.above(-1);
            });
        });

        describe('fullName', function () {
            it('should return fullName', function () {
                console.log(faket.name.fullName())
            });
        });
    });

})