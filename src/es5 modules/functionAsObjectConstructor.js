function CoffeeMachine(power) {
    this.waterAmount = 0;

    //private method
    function getBoilTime() {
        return 1000; // точная формула расчета будет позже
    }

    //private method
    function onReady() {
        alert('Кофе готово!');
    }

    //public method
    this.run = function () {
        // setTimeout - встроенная функция, она запустит onReady через getBoilTime()
        // миллисекунд
        setTimeout(onReady, getBoilTime());
    };
}

// function is object. This - reference on object. function expressions is able
// to invoke function declaration is disable => cannot invoke when Object
// creating

var coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();

export {coffeeMachine};
