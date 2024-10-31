const fat = require('./fatorial');

test('fatorial de 5 deve retornar: 120', () => {
  expect(fat(5)).toBe(120);
});
