'use strict';

const test = require('supertape');
const onezip = require('..');

test('onezip: no args', (t) => {
    t.throws(onezip, /operations could be "pack" or "extract" only!/, 'should throw when bad operation');
    t.end();
});

