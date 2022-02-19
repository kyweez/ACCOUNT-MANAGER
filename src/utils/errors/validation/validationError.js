import RequestError from '../request-error/requestError';

export default class ValidationError extends RequestError {
	constructor(err) {
		const errorMessage = err ? err.errors[0].message : 'A validation constraint failed';
		super(errorMessage, 400);
	}
}
