import ValidationError from './validationError';

describe('ValidationError.class', () => {
	it('should create a request error with the first validation error message', () => {
		const validationErrors = {
			errors: [{ type: 'test', message: 'errorMessage' }],
		};
		const newValidationError = new ValidationError(validationErrors);
		expect(newValidationError.message).toBe('errorMessage');
		expect(newValidationError.httpCode).toBe(400);
	});

	it('should create a request error with the Bad Request message if no message is specified', () => {
		const newValidationError = new ValidationError();
		expect(newValidationError.message).toBe('A validation constraint failed');
		expect(newValidationError.httpCode).toBe(400);
	});
});
