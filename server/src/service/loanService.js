import storage from '../model/dummyData';

const { loans } = storage;

export default class LoanService {
  static fetchLoan() {
    const data = loans;

    return {
      status: 200,
      data,
      success: true
    };
  }
}
