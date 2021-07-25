const responseCustomFunctionsMiddleware = function (req, res, next) {
  res.parseServiceResult = function (result) {
    if (result.success) {
      this.send(result.data);
    } else {
      this.status(result.statusCode).send({ message: result.message });
    }
  };
  next();
};

module.exports = responseCustomFunctionsMiddleware;
