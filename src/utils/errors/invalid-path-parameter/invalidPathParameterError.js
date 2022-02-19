import RequestError from '../request-error/requestError';

export default class InvalidPathParameterError extends RequestError {
	constructor() {
		super('Invalid id', 400);
	}
}
