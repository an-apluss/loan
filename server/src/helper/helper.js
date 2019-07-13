import Joi from '@hapi/joi';
import 'dotenv/config';
import bycrpt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 *
 *
 * @export
 * @class Helper
 */
export default class Helper {
  /**
   *
   * Handles the logic to generate ID
   * @static
   * @param {Array} data data to generate ID from
   * @returns {Integer}
   * @memberof Helper
   */
  static generateId(data) {
    const lastId = data[data.length - 1].id;
    const newId = lastId + 1;
    return newId;
  }

  /**
   *
   * Handles logic to check if a field is alphabeltic or not
   * @static
   * @param {String} field field to be checked
   * @returns Boolean
   * @memberof Helper
   */
  static notAlpha(field) {
    const pattern = /^[a-zA-Z]+$/;
    if (!field.match(pattern)) return true;
    return false;
  }

  /**
   *
   * Handles the logic to validate the user details for registration
   * @static
   * @param {Object} user user details to be validated
   * @returns Object
   * @memberof Helper
   */
  static validateSignup(user) {
    const schema = {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string()
        .alphanum()
        .min(6)
        .required(),
      email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
      address: Joi.string().required(),
      occupation: Joi.string().required()
    };
    return Joi.validate(user, schema);
  }

  static generateToken(user) {
    const token = jwt.sign(
      {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        occupation: user.occupation,
        email: user.email
      },
      process.env.JWTPRIVATEKEY,
      { expiresIn: '24h' }
    );
    return token;
  }

  /**
   *
   * Handles the logic to hash a plaintext password
   * @static
   * @param {String} plainTextPassword password plain text to be hash
   * @param {Integer} salt salt rounds to give a secure hash
   * @returns String
   * @memberof Helper
   */
  static async hashPassword(plainTextPassword, salt) {
    const gensalt = await bycrpt.genSalt(salt);
    const password = await bycrpt.hash(plainTextPassword, gensalt);
    return password;
  }
}
