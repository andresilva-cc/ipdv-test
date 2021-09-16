import BaseError from './BaseError';

class TokenError extends BaseError {
  constructor(
    public originalName?: string,
    public stackTrace?: string,
  ) {
    super(
      403,
      'TokenError',
      'Forbidden',
      'The provided token is invalid or does not have access to the requested resource.',
      originalName,
      stackTrace,
    );
  }
}

export default TokenError;
