class Class1 {} // no semicolon!
class Class2 {} // no semicolon!
class Class3 {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }
}
class Class4 {}
class Class5 {}
//multiple classes export
export {Class1, Class2, Class3, Class4, Class5};
//export default Class3;