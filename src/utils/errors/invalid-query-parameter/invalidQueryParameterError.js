import RequestError from '../request-error/requestError';

export default class InvalidQueryParameterError extends RequestError {
	constructor() {
		super('Invalid query parameter', 400);
	}
}
