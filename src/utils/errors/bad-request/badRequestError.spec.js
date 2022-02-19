import BadRequestError from "./badRequestError";

describe("BadRequestError.class", () => {
  it("should create a request error with the specified message", () => {
    const errorMessage = "my message";
    const newBadRequestError = new BadRequestError(errorMessage);
    expect(newBadRequestError.message).toBe(errorMessage);
    expect(newBadRequestError.httpCode).toBe(400);
  });

  it("should create a request error with the Bad Request message if no message is specified", () => {
    const newBadRequestError = new BadRequestError();
    expect(newBadRequestError.message).toBe("Bad Request");
    expect(newBadRequestError.httpCode).toBe(400);
  });
});
