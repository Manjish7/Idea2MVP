class NotFoundError extends Error {
  constructor(message) {
    super();
    this.message = message || "Resource not found";
  }
}
export default NotFoundError;
