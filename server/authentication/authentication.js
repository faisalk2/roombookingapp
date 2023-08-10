import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authentication = async (request, response, next) => {
  const token = request.headers.token;
  await jwt.verify(token, process.env.KEY, function (err, decoded) {
    if (err) {
      response.status(400).json("please login");
    }
    if (decoded) {
      next();
    }
  });
};
