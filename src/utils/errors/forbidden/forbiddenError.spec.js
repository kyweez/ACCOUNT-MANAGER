import ForbiddenError from './forbiddenError';

describe('ForbiddenError.class', () => {
	it('should create a request error with the Forbidden message', () => {
		const newForbiddenError = new ForbiddenError();
		expect(newForbiddenError.message).toBe('Forbidden');
		expect(newForbiddenError.httpCode).toBe(403);
	});
});
