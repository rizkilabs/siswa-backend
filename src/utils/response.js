function success(res, status = 200, data = {}, message = "OK") {
  return res.status(status).json({
    success: true,
    status,
    message,
    data,
  });
}

function fail(res, status = 400, error = "Bad Request") {
  return res.status(status).json({
    success: false,
    status,
    error,
  });
}

module.exports = {
  success,
  fail,
};
