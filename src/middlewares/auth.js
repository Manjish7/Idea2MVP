import { verifyToken } from "../utils/jwt";

export const auth = async (req, _, next) => {
  if (!req.headers.authorization)
    return next("Unauthorized. Access token missing");

  const token = req.headers.authorization.split(" ")[1];
  if (!token) return next("Unauthorized");

  try {
    const user = await verifyToken(token);
    req.user = user.payload;
    next();
  } catch (error) {
    next(error.message);
  }
};
