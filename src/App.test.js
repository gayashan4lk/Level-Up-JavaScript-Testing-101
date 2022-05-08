//import { getSumOfTwoNumbers, getTotal } from './App';
import { getTotal } from './App';

// test('Fake test', () => {
// 	expect(true).toBeTruthy();
// });

// // Unit test
// test('getSumOfTwoNumbers test', () => {
// 	const value = getSumOfTwoNumbers(1, 2);
// 	expect(value).toBe(3);
// });

// test('getTotal test', () => {
// 	const expectedValue = getTotal(20, 5);
// 	expect(expectedValue).toBe('$25');
// });

// Mocking
const getSumOfTwoNumbers = jest.fn(() => 3);

test('getSumofTwoNumbers Mocking test', () => {
	const expectedValue = getSumOfTwoNumbers(1, 2);
	expect(expectedValue).toBe(3);
	expect(getSumOfTwoNumbers).toHaveBeenCalledTimes(1);
	expect(getSumOfTwoNumbers).toHaveBeenCalledWith(1, 2);
});
