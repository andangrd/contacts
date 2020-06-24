import Colors from './Colors';

const valueCounter = (object) => {
  const counter = {};
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (counter[value]) {
      counter[value] += 1;
    } else {
      counter[value] = 1;
    }
  });
  return counter;
};

describe('Colors Theme constant must NOT contain Duplicate Values', () => {
  const colors = valueCounter(Colors);
  Object.keys(colors).forEach((key) => {
    const value = colors[key];
    test(`Color '${key}' must be unique`, () => {
      expect(value).toBe(1);
      expect(value).not.toBeNull();
    });
  });
});
