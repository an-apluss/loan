import Helper from '../helper/helper';
import storage from '../model/dummyData';

const { validateSignup, notAlpha, validateSignin } = Helper;
const { users } = storage;

export default class UserValidator {
  static checkSignup(req, res, next) {
    const { firstName, lastName, email } = req.body;

    const { error } = validateSignup(req.body);

    if (error)
      return res.status(422).json({
        status: 422,
        error: error.details[0].message,
        success: false
      });

    if (notAlpha(firstName))
      return res
        .status(422)
        .json({ status: 422, error: 'firstname can only be alphabelt', success: false });

    if (notAlpha(lastName))
      return res
        .status(422)
        .json({ status: 422, error: 'lastname can only be alphabelt', success: false });

    const userExist = users.find(user => user.email === email);

    if (userExist)
      return res.status(409).json({
        status: 409,
        error: 'Email Has Been Taken',
        success: false
      });

    return next();
  }

  /**
   *
   * Handles validation of user input to login/sign in on the platform
   * @static
   * @param {*} req
   * @param {*} res
   * @returns {(function|Object)} function next() or an error response object
   * @memberof UserValidator
   */
  static checkSignin(req, res, next) {
    const { error } = validateSignin(req.body);
    if (error)
      return res.status(422).json({
        status: 422,
        error: error.details[0].message,
        success: false
      });

    return next();
  }
}
