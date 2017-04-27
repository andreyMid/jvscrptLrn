import { moduleWithPrivateMethod } from 'es5 modules/moduleWithPrivateMethod.js';

//get module instance:
//Не прокатывает
/*before(moduleWithPrivateMethod1 => {
    moduleWithPrivateMethod1.publicMethod();
});*/

moduleWithPrivateMethod.publicMethod();
moduleWithPrivateMethod.setNode('z', 888);
moduleWithPrivateMethod.setNode('v', '444');

describe('moduleWithPrivateMethod testing', () => {
    it('checking that property y has been installed by invoken public method, that invoke private method', () =>
        expect(moduleWithPrivateMethod.getNode('y')).to.equal(333));

    it('checking that property x has been installed by invoken public method, that invoke private method', () =>
        expect(moduleWithPrivateMethod.getNode('x')).to.equal(777));

    it('checking that property z has been installed by invoken public method, that invoke private method', () =>
        expect(moduleWithPrivateMethod.getNode('z')).to.equal(888));

    it('checking that property v has been installed by invoken public method, that invoke private method', () =>
        expect(moduleWithPrivateMethod.getNode('v')).to.equal('444'));
});
