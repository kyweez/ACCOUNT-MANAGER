import BodyMissingRequiredFieldError from './bodyMissingRequiredFieldError';

describe('BodyMissingRequiredFieldError.class', () => {
	it('should create a request error with the Body Missing Required Field Error message', () => {
		const bodyMissingRequiredFieldError = new BodyMissingRequiredFieldError();
		expect(bodyMissingRequiredFieldError.message).toBe('Body is missing a required field');
		expect(bodyMissingRequiredFieldError.httpCode).toBe(400);
	});
});
