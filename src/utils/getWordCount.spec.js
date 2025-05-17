import { test, expect } from 'vitest';
import getWordCountFromText from './getWordCount';

test('it should return correct count for text with no punctuation', () => {
  expect(getWordCountFromText('One two three')).toBe(3);

  expect(
    getWordCountFromText('Earum solvo voveo veritatis depopulo ullus nesciunt ultio urbanus')
  ).toBe(9);

  expect(getWordCountFromText('')).toBe(0);
});

test('it should return correct count for standard punctuation', () => {
  expect(
    getWordCountFromText(`This is some pretty standard, common punction. Don't you think?`)
  ).toBe(10);

  expect(getWordCountFromText('Hyphenated words should count as-one')).toBe(5);
});

test('it should return correct count for standard symbols', () => {
  expect(getWordCountFromText(`Hi I'm the #1 tester in the world`)).toBe(8);

  expect(getWordCountFromText('This & that')).toBe(3);

  expect(getWordCountFromText('I have a $5.00 bill')).toBe(5);
});

test('it should return correct count for text with nonstandard punctuation', () => {
  expect(
    getWordCountFromText('This is less standard . In fact , it is quite  weird .Yes?')
  ).toBe(11);
});

test('it should properly handle ellipses', () => {
  expect(getWordCountFromText('This is three...')).toBe(3);

  expect(getWordCountFromText('Thinking...done')).toBe(2);

  expect(getWordCountFromText(`I'm...thinking..really...hard....today`)).toBe(5);

  expect(getWordCountFromText(`Hi there I'm...thinking..really...hard....today bye there`)).toBe(9);
});

test('it should properly handle currency', () => {
  expect(getWordCountFromText('I have $5.00 to my name')).toBe(6);

  expect(getWordCountFromText('$12.34')).toBe(1);

  expect(getWordCountFromText(`$5.00's all I got`)).toBe(4);
});

test('it should properly handle whitespace', () => {
  expect(getWordCountFromText('  I  am  five  words  long  ')).toBe(5);
});
