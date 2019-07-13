/**
 *
 *
 * @export User
 * @class User
 */
export default class User {
  /**
   *Creates an instance of User.
   * @param {Integer} id
   * @param {String} email
   * @param {String} firstName
   * @param {String} lastName
   * @param {String} password
   * @param {String} address
   * @param {String} occupation
   * @memberof User
   */
  constructor(id, email, firstName, lastName, password, address, occupation) {
    this.id = id;
    this.email = email;
    this.first_name = firstName;
    this.last_name = lastName;
    this.password = password;
    this.address = address;
    this.occupation = occupation;
  }
}
