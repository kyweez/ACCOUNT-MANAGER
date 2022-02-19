import Unauthorized from './unauthorizedError';

describe('UnauthorizedError.class', () => {
	it('should create a request error with the Unauthorized message', () => {
		const newForbiddenError = new Unauthorized();
		expect(newForbiddenError.message).toBe('Unauthorized');
		expect(newForbiddenError.httpCode).toBe(401);
	});
});
