import { add } from './App';

test('Fake test', () => {
	expect(true).toBeTruthy();
});

// Unit test
test('add', () => {
	const value = add(1, 2);
	expect(value).toBe(3);
});
