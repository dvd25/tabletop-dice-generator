const rollDice = require('./script.js');


test('check if dice roll is higher than faces of dice', () => {
  expect(rollDice(5)).toBeGreaterThanOrEqual(1);
});


test('check if dice roll is less than faces of dice', () => {
    expect(rollDice(5)).toBeLessThan(6);
});