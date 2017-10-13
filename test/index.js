import { assert, expect } from 'chai';
import * as tools from '../src/tools';

describe('Tests for tools.isVocal-function.', () => {

  it('A should be a vocal', () => {
    let vocal = tools.isVocal('A');

    assert.isTrue(vocal, 'There is something going wrong ...');
  });

  it('B should be no vocal', () => {
    let vocal = tools.isVocal('B');

    assert.isNotTrue(vocal, 'There is something going wrong ...');
  });

});

describe('Tests for tools.splitValue-function.', () => {

  it('A should be an array ["A"]', () => {
    let inVal = tools.splitValue('A');
    let outVal = ['A'];

    expect(inVal).to.have.all.members(outVal);
  });

  it('AB should be an array ["A", "B"]', () => {
    let inVal = tools.splitValue('AB');
    let outVal = ['A','B'];

    expect(inVal).to.have.all.members(outVal);
  });

  it('ABC should be an array ["A", "B", "C"]', () => {
    let inVal = tools.splitValue('ABC');
    let outVal = ['A','B', 'C'];

    expect(inVal).to.have.all.members(outVal);
  });

});
