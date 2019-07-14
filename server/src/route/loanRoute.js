import express from 'express';

import LoanController from '../controller/loanController';

const loanRoute = express.Router();

const { getLoans } = LoanController;

loanRoute.get('/', getLoans);

export default loanRoute;
