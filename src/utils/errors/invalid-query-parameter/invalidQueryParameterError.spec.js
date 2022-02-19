import InvalidQueryParameterError from './invalidQueryParameterError';

describe('InvalidQueryParameterError.class', () => {
	it('should create a request error with the Invalid query parameter Error message', () => {
		const invalidQueryParameterError = new InvalidQueryParameterError();
		expect(invalidQueryParameterError.message).toBe('Invalid query parameter');
		expect(invalidQueryParameterError.httpCode).toBe(400);
	});
});
