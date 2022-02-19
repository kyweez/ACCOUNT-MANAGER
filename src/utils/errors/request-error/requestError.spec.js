import { jest } from '@jest/globals';
import RequestError from './requestError';

describe('RequestError class', () => {
	let res;

	beforeEach(() => {
		res = {
			json: jest.fn(),
			status: jest.fn(),
		};
		res.status.mockReturnValue(res);
	});
	describe('create request error', () => {
		it('should create a request error with the specified message', () => {
			const errorMessage = 'my error message';
			const httpCode = 400;
			const newRequestError = new RequestError(errorMessage, httpCode);
			expect(newRequestError.message).toBe(errorMessage);
			expect(newRequestError.httpCode).toBe(httpCode);
		});
	});

	describe('send request error', () => {
		it('should return a Json object with the error message and http code pass in argument to constructor', () => {
			const errorMessage = 'my error message';
			const httpCode = 400;
			const newRequestError = new RequestError(errorMessage, httpCode);
			newRequestError.send(res);
			expect(newRequestError.message).toBe(errorMessage);
			expect(newRequestError.httpCode).toBe(httpCode);
			expect(res.status).toHaveBeenCalledWith(400);
			expect(res.json).toHaveBeenCalledWith({ message: errorMessage, status: 'fail' });
		});
	});
});
