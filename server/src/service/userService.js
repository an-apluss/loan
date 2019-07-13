import Helper from '../helper/helper';
import User from '../model/userModel';
import storage from '../model/dummyData';

const { generateId, hashPassword, generateToken, compareHashedPassword } = Helper;
const { users } = storage;
/**
 *
 *
 * @export UserService
 * @class UserService
 */
export default class UserService {
  /**
   *
   * Handles the logic to register/sign up user on the platform
   * @static
   * @param {Object} userData holds the details about the user
   * @returns JSON API Response
   * @memberof UserService
   */
  static async createUser(userData) {
    const { firstName, lastName, email, password, address, occupation } = userData;

    const id = generateId(users);
    const hashedPassword = await hashPassword(password, 10);

    const newUser = new User(id, email, firstName, lastName, hashedPassword, address, occupation);
    users.push(newUser);

    const { first_name, last_name } = newUser;

    return {
      status: 201,
      data: {
        token: generateToken(newUser),
        id,
        first_name,
        last_name,
        email,
        occupation
      },
      success: true
    };
  }

  /**
   *
   * Handles the logic to sign in/login user on the platform
   * @static
   * @param {Object} userData holds data to login user
   * @returns JSON API Response
   * @memberof UserService
   */
  static async loginUser(userData) {
    const userExist = users.find(user => user.email === userData.email);

    if (!userExist)
      return {
        status: 401,
        error: 'Authentication Failed. Incorrect Login Credentials',
        success: false
      };

    const { id, first_name, last_name, email, password, occupation } = userExist;
    const existPassword = await compareHashedPassword(userData.password, password);

    if (existPassword)
      return {
        status: 200,
        data: {
          token: generateToken(userExist),
          id,
          first_name,
          last_name,
          email,
          occupation
        },
        success: true
      };

    return {
      status: 401,
      error: 'Authentication Failed. Incorrect Login Credentials',
      success: false
    };
  }
}
