import RequestError from '../request-error/requestError';

export default class InternalServerError extends RequestError {
	constructor(message = null) {
		const errorMessage = message || 'Internal Server Error';
		super(errorMessage, 500);
	}
}
