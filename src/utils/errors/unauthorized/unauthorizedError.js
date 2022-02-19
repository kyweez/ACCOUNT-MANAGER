import RequestError from '../request-error/requestError';

export default class UnauthorizedError extends RequestError {
	constructor() {
		super('Unauthorized', 401);
	}
}
