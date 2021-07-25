const responseCustomFunctionsMiddleware = function (req, res, next) {
  res.parseServiceResult = function (result) {
    if (result.success) {
      this.json(result.data);
    } else {
      this.status(result.statusCode).json({ message: result.message });
    }
    next();
  };
};

module.exports = responseCustomFunctionsMiddleware;
