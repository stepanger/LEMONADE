QUnit.test( "validation_of", function( assert ) {
  assert.ok(LEMONADE.validation_of(123) === 123, "выводит число");
  assert.ok(LEMONADE.validation_of("123") === 123, "Проверка на строку");
  assert.ok(LEMONADE.validation_of("asd") === 0, "неверное значение");
  assert.ok(LEMONADE.validation_of() === 0, "неверное значение");
});