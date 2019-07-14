import LoanService from '../service/loanService';

/**
 *
 *
 * @export LoanController
 * @class LoanController
 */
export default class LoanController {
  /**
   *
   * Handles the logic to fetch all loan
   * @static
   * @param {Object} req
   * @param {Object} res
   * @returns JSON API Response
   * @memberof LoanController
   */
  static async getLoans(req, res, next) {
    try {
      const response = await LoanService.fetchLoan();
      return res.status(response.status).send(response);
    } catch (ex) {
      return next(ex);
    }
  }
}
