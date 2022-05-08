export const getSumOfTwoNumbers = (x, y) => x + y;

export const getTotal = (subTotal, total) => {
	return '$' + getSumOfTwoNumbers(subTotal, total);
};
