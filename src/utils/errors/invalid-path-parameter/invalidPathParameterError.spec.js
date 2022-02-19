import InvalidPathParameterError from './invalidPathParameterError';

describe('InvalidPathParameterError.class', () => {
	it('should create a request error with the Invalid Path Parameter Error message', () => {
		const invalidParameterError = new InvalidPathParameterError();
		expect(invalidParameterError.message).toBe('Invalid id');
		expect(invalidParameterError.httpCode).toBe(400);
	});
});
