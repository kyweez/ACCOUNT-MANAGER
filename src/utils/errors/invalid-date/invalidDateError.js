import RequestError from '../request-error/requestError';

export default class InvalidDateError extends RequestError {
	constructor() {
		super('Invalid date', 400);
	}
}
