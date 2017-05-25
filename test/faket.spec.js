const names = require('../dataset/names-dataset');
const faket = require('../faket')
const expect = require('chai').expect;
const assert = require('chai').assert;


const MALE = 1;
const FEMALE = 2;

describe('Faket', function () {
    describe('name', function () {

        describe('firstName', function () {
            let males, females;

            before(function () {
                males = names.males;;
                females = names.females;;
            })
            it('should return random name from names dataset', function () {
                let data = [...names.males, ...names.females];
                let result = faket.name.firstName();
                let index = data.indexOf(result);
                expect(index).to.be.above(-1);
            });

            it('should return male name when gender parameter is male', function () {
                let result = faket.name.firstName(MALE);
                let index = males.indexOf(result);
                expect(index).to.be.above(-1);
            });
            it('should return female name when gender parameter is female', function () {
                let result = faket.name.firstName(FEMALE);
                let index = females.indexOf(result);
                expect(index).to.be.above(-1);
            });
        });

        describe('fullName', function () {
            it('should return fullName', function () {
                let result = faket.name.fullName();
                let parts = result.split(' ').length;
                assert.isTrue(parts >= 3);
            });
            it('should occasionally return fullName name with prefix');
            it('should occasionally return female fullName with female prefix when gender parameter is female');
            it('should occasionally return male fullName with  male prefix when gender parameter is male');
        });

        describe('prefix', function () {
            let malesPrefix, femalesPrefix;

            before(function () {
                malesPrefix = names.malesPrefix;
                femalesPrefix = names.femalesPrefix;
            });

            it('should return random prefix', function () {
                let result = faket.name.prefix();
                let index = [...malesPrefix, ...femalesPrefix].indexOf(result);
                assert.ok(index >= 0);
            });

            it('should return random male prefix when gender parameter is male', function () {
                let result = faket.name.prefix(MALE);
                let index = malesPrefix.indexOf(result);
                assert.ok(index >= 0);
            });

            it('should return random female prefix when gender parameter is female', function () {
                let result = faket.name.prefix(FEMALE);
                let index = femalesPrefix.indexOf(result);
                assert.ok(index >= 0);
            });

        });
    });

})