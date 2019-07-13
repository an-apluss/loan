import express from 'express';

import UserValidator from '../middleware/UserValidator';
import UserController from '../controller/userController';

const userRoute = express.Router();

const { checkSignup } = UserValidator;
const { postSignUp } = UserController;

userRoute.post('/signup', checkSignup, postSignUp);

export default userRoute;
