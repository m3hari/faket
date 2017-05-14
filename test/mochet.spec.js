const names = require('../dataset/names');
const { name } = require('../faket')
const expect = require('chai').expect;

describe('Faket', function () {
    describe('name', function () {
        it('should return random name from names dataset', function () {
            let index = names.indexOf(name());
            expect(index).to.be.above(0);
        })
    })
})