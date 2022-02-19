import InternalServerError from './internalServerError';

describe('InternalServerError class', () => {
	it('should create a request error with the specified message', () => {
		const errorMessage = 'my message';
		const newInternalServerError = new InternalServerError(errorMessage);
		expect(newInternalServerError.message).toBe(errorMessage);
		expect(newInternalServerError.httpCode).toBe(500);
	});

	it('should create a request error with the Internal Server Error message if no message is specified', () => {
		const newInternalServerError = new InternalServerError();
		expect(newInternalServerError.message).toBe('Internal Server Error');
		expect(newInternalServerError.httpCode).toBe(500);
	});
});
