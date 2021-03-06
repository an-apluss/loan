import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

import userRoute from './route/userRoute';
import loanRoute from './route/loanRoute';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res
    .status(200)
    .json({ status: 200, data: 'Welcome to loan management system!', success: true });
});

app.get('/documentation', (req, res) => {
  return res.redirect('https://webloan.docs.apiary.io');
});

app.use('/api/v1/auth', userRoute);
app.use('/api/v1/loan', loanRoute);

app.use((req, res, next) => {
  const error = new Error('Route Does not Exist');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ status: error.status || 500, success: false, error: error.message });
  next();
});

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}...`);
});

export default app;
