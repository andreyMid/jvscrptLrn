// named imports
import * as moduleDef from 'es6 modules/namedImportSource.js'; // содержимое всего модуля сохраняется в объект
/*import { Class3 } from 'es6 modules/from-article-Named-Import-source.js';
import { Class1, Class2 } from 'es6 modules/from-article-Named-Import-source.js';
import { Class4 as CL, Class5 } from 'es6 modules/from-article-Named-Import-source.js';*/

function showNamedImport() {
    let inst = new moduleDef.Class3(3, 5);
    console.log('from-article-Named-Import-source. X value:' + inst._x);
}

export {showNamedImport};
