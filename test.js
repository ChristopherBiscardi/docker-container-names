import test from 'ava';
import forEach from 'lodash/collection/forEach';
import range from 'lodash/utility/range';
import endsWith from 'lodash/string/endsWith';
import genName from './index';

forEach(range(1,10000), n => {
  test(`test ${n}`, t => {
    t.is(genName().split('_').length, 2);
    t.end();
  });
})

test('adds a number on retry', t => {
  const name = genName(2);
  const number = parseInt(name.slice(name.length-1, name.length), 10);
  t.true(number < 10 && number >= 0);
    t.end();
  })
