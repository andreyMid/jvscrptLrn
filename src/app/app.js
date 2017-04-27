'use strict';
//es5 modules import
import * as modulePatternExportByBrackets from 'es5 modules/modulePatternExportByBrackets.js';
import * as functionExport from 'es5 modules/functionExport.js';
import * as functionExportByBrackets from 'es5 modules/functionExportByBrackets.js';
import * as modulePatternExport from 'es5 modules/modulePatternExport.js';
import * as moduleWithPublicMethod from 'es5 modules/moduleWithPublicMethod.js';
import * as moduleWithPrivateMethod from 'es5 modules/moduleWithPrivateMethod.js';
//es6 modules import
import * as namedImport from 'es6 modules/namedImport.js';
import a from 'es6 modules/variablesExport.js';

//es5 modules usage

functionExport.functionExport();
functionExportByBrackets.functionExportByBrackets();
modulePatternExport.modulePatternExport;
modulePatternExportByBrackets.modulePatternExportByBrackets;
//modules
moduleWithPublicMethod.moduleWithPublicMethod.publicMethod();

//module with public method
let nodeFromModule = moduleWithPublicMethod.moduleWithPublicMethod.nodesMap;
console.log(nodeFromModule['x']); //5454
nodeFromModule.y = 45454; // can set and save property value

let updatedFromModule = moduleWithPublicMethod.moduleWithPublicMethod.nodesMap;
console.log(updatedFromModule['y']); //1221

// console.log('trying invoke private method:' +
// privateModuleInstance._privateMethod()); //is not a function es6 modules
// usage namedImport.showNamedImport();
console.log('named value:' + a); //get default value
