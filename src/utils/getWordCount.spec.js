import { test, expect } from 'vitest';
import getWordCount from './getWordCount';

test('it should return correct count for text with no punctuation', () => {
  expect(getWordCount('One two three')).toBe(3);

  expect(
    getWordCount('Earum solvo voveo veritatis depopulo ullus nesciunt ultio urbanus')
  ).toBe(9);

  expect(getWordCount('')).toBe(0);
});

test('it should return correct count for standard punctuation', () => {
  expect(
    getWordCount(`This is some pretty standard, common punction. Don't you think?`)
  ).toBe(10);

  expect(getWordCount('Hyphenated words should count as-one')).toBe(5);
});

test('it should return correct count for standard symbols', () => {
  expect(getWordCount(`Hi I'm the #1 tester in the world`)).toBe(8);

  expect(getWordCount('This & that')).toBe(3);

  expect(getWordCount('I have a $5.00 bill')).toBe(5);
});

test('it should return correct count for text with nonstandard punctuation', () => {
  expect(
    getWordCount('This is less standard . In fact , it is quite  weird .Yes?')
  ).toBe(11);
});

test('it should properly handle ellipses', () => {
  expect(getWordCount('Thinking...done')).toBe(2);

  expect(getWordCount(`I'm...thinking..really...hard....today`)).toBe(5);
});
