import RequestError from '../request-error/requestError';

export default class ForbiddenError extends RequestError {
	constructor() {
		super('Forbidden', 403);
	}
}
