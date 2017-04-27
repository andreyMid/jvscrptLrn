var moduleWithPublicMethod = (function () {
    'use strict';
    var nodesMap = {};

    function initNodesMap() {
        nodesMap['x'] = 5454;
    }

    initNodesMap();
    return {
        publicMethod: function () {
            console.log('moduleWithPublicMethod has been invoked');
        },
        nodesMap: nodesMap
    };
})();
export {moduleWithPublicMethod};
