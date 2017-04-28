import { CoffeeMachine } from 'es5 modules/functionAsObjectConstructor.js';

let coffeeMachine = new CoffeeMachine(100);

describe('functionAsObjectConstructor test', () => {
    //let coffeeMachine = new CoffeeMachine(100);
    let coffeeMachine = new CoffeeMachine(100);
    describe('check accessability of property via this reference:', () => {
        //test definition by human language
        it('Power must equal to 100', () => expect(coffeeMachine.power).to.equal(100));
    });

    coffeeMachine.waterAmount = 200;
    describe('check changing availability for the public property:', () => {
        it('Power must equal to 200', () => expect(coffeeMachine.waterAmount).to.equal(200));
    });

    cofeeMachine.run();
    /*describe('check function invoke after timeout: ', () => {
        it('The function must called after 1000 ms', () => expect(coffeeMachine.run().to.equal(454)));
    });*/
});
