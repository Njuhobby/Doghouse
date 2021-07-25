const result = {
  ok: (data) => ({
    success: true,
    data,
  }),
  error: (message, statusCode = 400) => ({
    success: false,
    message,
    statusCode,
  }),
};

module.exports = result;
