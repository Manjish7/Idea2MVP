const errorResponse = (res, message) => {
  res.json({
    success: false,
    message,
  });
};

export const handleError = (err, res) => {
  return errorResponse(res, err.message);
};
