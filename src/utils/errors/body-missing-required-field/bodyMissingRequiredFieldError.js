import RequestError from '../request-error/requestError';

export default class BodyMissingRequiredFieldError extends RequestError {
	constructor() {
		super('Body is missing a required field', 400);
	}
}
