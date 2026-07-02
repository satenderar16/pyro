export class ResponseBuilder {
  static success<T>(
    data: T,
    message?: string
  ) {
    return {
      success: true,
      data,
      message
    };
  }

  static error(
    code: string,
    message: string,
    details?: unknown
  ) {
    return {
      success: false,
      error: {
        code,
        message,
        details
      }
    };
  }
}