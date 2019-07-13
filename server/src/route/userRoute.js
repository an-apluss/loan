import express from 'express';

import UserValidator from '../middleware/UserValidator';
import UserController from '../controller/userController';

const userRoute = express.Router();

const { checkSignup, checkSignin } = UserValidator;
const { postSignUp, postSignIn } = UserController;

userRoute.post('/signup', checkSignup, postSignUp);
userRoute.post('/signin', checkSignin, postSignIn);

export default userRoute;
