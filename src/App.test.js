import { getSumOfTwoNumbers, getTotal } from './App';

test('Fake test', () => {
	expect(true).toBeTruthy();
});

// Unit test
test('getSumOfTwoNumbers test', () => {
	const value = getSumOfTwoNumbers(1, 2);
	expect(value).toBe(3);
});

test('getTotal test', () => {
	const expectedValue = getTotal(20, 5);
	expect(expectedValue).toBe('$25');
});
