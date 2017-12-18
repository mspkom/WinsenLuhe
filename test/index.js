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

describe('Tests for tools.joinValue-function.', () => {

  it('["A"] should be A', () => {
    const props = [['A'], 'A'];
    const test = tools.joinValue(props[0]);

    assert.equal(test, props[1], 'There is something going wrong ...');
  });

  it('["A", "B"] should be AB', () => {
    const props = [['A', 'B'], 'AB'];
    const test = tools.joinValue(props[0]);

    assert.equal(test, props[1], 'There is something going wrong ...');
  });

  it('["A", "B", "C"] should be ABC', () => {
    const props = [['A', 'B', 'C'], 'ABC'];
    const test = tools.joinValue(props[0]);

    assert.equal(test, props[1], 'There is something going wrong ...');
  });

});

describe('Tests for tools.getWinsenLuhe-function for single input.', () => {

  it('A should be LANSEN (WAHE)', () => {
    const props = ['WINSEN (LUHE)', 'A', 'WANSEN (LAHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

  it('K should be KINSEN (KUHE)', () => {
    const props = ['WINSEN (LUHE)', 'K', 'KINSEN (KUHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

});

describe('Tests for tools.getWinsenLuhe-function for double input.', () => {

  it('AA should be WANSEN (WAHE)', () => {
    const props = ['WINSEN (LUHE)', 'AA', 'WANSEN (LAHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

  it('KK should be KINSEN (KUHE)', () => {
    const props = ['WINSEN (LUHE)', 'KK', 'KINSEN (KUHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

  it('OÖ should be LONSEN (WÖHE)', () => {
    const props = ['WINSEN (LUHE)', 'OÖ', 'WONSEN (LÖHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

  it('OK should be WONSEN (KUHE)', () => {
    const props = ['WINSEN (LUHE)', 'OK', 'WONSEN (KUHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

  it('KO should be KINSEN (LOHE)', () => {
    const props = ['WINSEN (LUHE)', 'KO', 'KINSEN (LOHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

});

describe('Tests for tools.getWinsenLuhe-function for tripple input.', () => {

  it('AAA should be LANSAN (WAHE)', () => {
    const props = ['WINSEN (LUHE)', 'AAA', 'WANSAN (LAHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

  it('AKA should be WAKSEN (LAHE)', () => {
    const props = ['WINSEN (LUHE)', 'AKA', 'WAKSEN (LAHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

  it('AAK should be WANSAN (KUHE)', () => {
    const props = ['WINSEN (LUHE)', 'AAK', 'WANSAN (KUHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

  it('KAK should be KANSEN (KUHE)', () => {
    const props = ['WINSEN (LUHE)', 'KAK', 'KANSEN (KUHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

  it('KKA should be KIKSEN (LAHE)', () => {
    const props = ['WINSEN (LUHE)', 'KKA', 'KIKSEN (LAHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

  it('KKK should be KIKSEN (KUHE)', () => {
    const props = ['WINSEN (LUHE)', 'KKK', 'KIKSEN (KUHE)'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

});

describe('Tests for tools.getWinsenLuhe-function for error-case.', () => {

  it('AAAA should be "Eingabe zu lang.', () => {
    const props = ['WINSEN (LUHE)', 'AAAA', 'Eingabe zu lang.'];
    const test = tools.getWinsenLuhe(props[0], props[1]);

    assert.equal(test, props[2], 'There is something going wrong ...');
  });

});
