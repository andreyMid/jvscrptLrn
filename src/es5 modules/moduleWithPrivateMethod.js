var moduleWithPrivateMethod = (function() {
    'use strict';
    var _nodesMap = {}; //private

    _nodesMap['x'] = 777;

    function _privateMethod() {
        _nodesMap['y'] = 333;
    }

    var _functionExpressionPrivareMethod = function() {
        _nodesMap['quantity'] = 989;
    };

    function setNode(propertyName, propertyValue) {
        _nodesMap[propertyName] = propertyValue;
    }

    function getNode(propertyName) {
        return _nodesMap[propertyName];
    }

    return {
        publicMethod: function() {
            _privateMethod();
        },
        getNode: getNode,
        setNode: setNode,
    };
})();

export { moduleWithPrivateMethod };
