import { assert } from 'chai';
import awesomeFunction from '../src/awesomeModule';

describe('Describe an awesome test.', () => {

  it('1 puls 1 should be 2', () => {
    assert(awesomeFunction(1, 1) === 2, 'Not awesome :(');
  });

  it('1 plus 2 should be 3', () => {
    assert(awesomeFunction(1, 2) === 3, 'Not so awesome :(');
  });

});

describe('Describe an other awesome test.', () => {

  it('1 plus 2 should be 3', () => {
    assert(awesomeFunction(1, 2) === 3, 'Not so awesome :(');
  });

});
