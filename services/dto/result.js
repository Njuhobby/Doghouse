const result = {
  ok: (data) => ({
    success: true,
    data,
  }),
  error: (msg) => ({
    success: false,
    msg: msg,
  }),
};

module.exports = result;
