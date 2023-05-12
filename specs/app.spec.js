import { expect, test } from '@jest/globals'
// eslint-disable-next-line no-unused-vars
import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

describe ('Функция Проверки имени пользователя', () => {

  test ('should return the correct name', () => {
      expect(nameIsValid('Maiia')).toBe(true);
  })

  test ('should does not return a non-existent name', () => {
      expect(nameIsValid('')).toBe(false);
  }) 

  test ('should does not return a name shorter than two characters', () => {
      expect(nameIsValid('С')).toBe(false);
  })

})


describe ('Функция Удаления пробелов', () => {

  test('should return empty string if no parameters are passed', () => {
  expect(fullTrim()).toBe('')
  })

  test('should return string without spaces', () => {
  expect(fullTrim('one  two three')).toBe('onetwothree')
  })

  test('should return same string if does not contain spaces', () => {
  expect(fullTrim('onetwothree')).toBe('onetwothree')
  })

}) 

describe ('Функция Подсчёта суммы заказа', () => {

  test.each ([
      [[{price: 10, quantity: 10}], 0, 100],
      [[{price: 20, quantity: 1}], 10, 18],
      [[{price: 0, quantity: 10}], 0, 0],
      [[{price: 10, quantity: 10}, {price: 10, quantity: 10}], 10, 180],
      [[{price: 20, quantity: 1}, {price: 10, quantity: 10}], 90, 12],
  ]) ('correctly calculates the amount of the order, taking into account the discount and for several products', (items, discount, expected) => {
      expect(getTotal(items, discount)).toBe(expected);
  })

  test('does not accept string discount', () => {
  expect(() => getTotal([], 'test')).toThrow()
  })

  test('does not accept negative discount', () => {
  expect(() => getTotal([], -10)).toThrow()
  })

})