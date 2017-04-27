'use strict';
var modulePatternExport = (function () {
    //executed when initialized
    console.log('Initialized while modulePatternExport');
})();
//export default modulePatternExport;
export {modulePatternExport};
