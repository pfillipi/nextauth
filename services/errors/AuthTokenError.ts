export class AuthTokenError extends Error {
  constructor() {
    super('Autentiseringstoken mislyktes.')
  }
}