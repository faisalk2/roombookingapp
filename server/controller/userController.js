import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const userRegistration = async (request, response) => {
  const { name, email, password } = request.body;
  try {
    let exist = await User.findOne({ email });
    if (exist) {
      return response.status(400).json("user already exist");
    }

    await bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        return response.status(500).json(err);
      }
      if (hash) {
        const newUser = new User({ name, email, password: hash });
        await newUser.save();
        return response.status(200).json("user save successfully");
      }
    });
  } catch (error) {
    return response.status(500).json("something went wrong");
  }
};

export const userLogin = async (request, response) => {
  const { email, password } = request.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          return response.status(500).json("something went wrong");
        }
        if (result) {
          const token = jwt.sign(
            { email: user.email, name: user.name },
            process.env.KEY
          );
          response.status(200).json({
            message: "login success",
            token,
            name: user.name,
            email: user.email,
          });
        } else {
          return response.status(400).json("wrong user name or password");
        }
      });
    } else {
      return response.status(400).json("user not exist");
    }
  } catch (error) {}
};
