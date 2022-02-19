import InvalidDateError from './invalidDateError';

describe('InvalidDateError.class', () => {
	it('should create a request error with the Invalid date error message', () => {
		const invalidDateError = new InvalidDateError();
		expect(invalidDateError.message).toBe('Invalid date');
		expect(invalidDateError.httpCode).toBe(400);
	});
});
