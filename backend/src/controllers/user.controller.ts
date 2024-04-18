import createHttpError from 'http-errors';
import { config } from '../config/config';
import { User } from '../models/user.model';
import { asyncHandler } from '../utils/asyncHandler';
import { generateToken } from '../utils/generateToken';
import { signupBody } from '../utils/userValidation';
import jwt from 'jsonwebtoken';

const registerUser = asyncHandler(async (req, res, next) => {
  try {
    const body = req.body;
    const result = signupBody.safeParse(body);

    if (!result.success) {
      res.status(400).json(result.error);
    }

    const existedUser = await User.findOne({ email: body.email });

    if (existedUser) {
      const error = createHttpError(400, 'User already existed');
      return next(error);
    }

    const user = await User.create(body);

    if (user) {
      generateToken(res, user._id);

      res.status(200).json({
        message: 'User Created Successfully',
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  } catch (error) {
    console.log(error);
  }
});

const loginUser = asyncHandler(async () => {});

const updateUser = asyncHandler(async () => {});

const logoutUser = asyncHandler(async () => {});

const deleteUser = asyncHandler(async () => {});

export { registerUser, loginUser, updateUser, logoutUser, deleteUser };
