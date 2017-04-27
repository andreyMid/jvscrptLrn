import { functionExport } from 'es5 modules/functionExport.js';

//chai: expect, assert, should
//mocha includes libraries, like it() and describe
//Sinon – для эмуляции и хитрой подмены функций «заглушками», понадобится позднее.
//Утверждения (assertions), или ожидания(expectations), как их часто называют, различаются в представленых фреймворках.
//chai
//test spies (doublers)

/*describe('functionExport test', function() {
    describe('functionExport returns test', function() {
        it('the functionExport has been invoked', function() {
            expect(functionExport()).to.equal('the functionExport has been invoked');
        });
    });
});*/

/*before(() => {
    console.log('functionExport tests begin');
});

after(() => {
    console.log('functionExport tests end');
});

beforeEach(() => {
    console.log('test execution beginning');
});

afterEach(() => {
    console.log('test execution ended');
});*/

//asynchronous testing by using promises
describe('functionExport test', () => {
    //test1
    describe('return string value test', () => {
        //test definition by human language
        it('string equal behaviour', () => expect(functionExport()).to.equal('the functionExport has been invoked'));
    });
    //failed test
    /*describe('return string value test', () => {
        it('Empty string behaviour', () => expect(functionExport()).to.equal(''));
    });*/
});
