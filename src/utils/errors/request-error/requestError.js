import logger from '../../logger';

export default class RequestError extends Error {
	constructor(message, httpCode) {
		super();
		this.message = message;
		this.httpCode = httpCode;
	}

	send(res) {
		if (this.httpCode === 500) logger.error(this.message);
		else logger.warn(this.message);

		res.status(this.httpCode).json({
			message: this.message,
			status: 'fail',
		});
	}
}
