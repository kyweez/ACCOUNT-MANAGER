import RequestError from '../request-error/requestError';

export default class BadRequestError extends RequestError {
	constructor(message = null) {
		const errorMessage = message || 'Bad Request';
		super(errorMessage, 400);
	}
}
