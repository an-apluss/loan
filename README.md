[![Build Status](https://travis-ci.org/an-apluss/loan.svg?branch=master)](https://travis-ci.org/an-apluss/loan) [![Coverage Status](https://coveralls.io/repos/github/an-apluss/loan/badge.svg?branch=master)](https://coveralls.io/github/an-apluss/loan?branch=master)

# Loan
This is a web application for basic loan management activities.

### API Deployment

API is deployed at https://webloan.herokuapp.com

### API Documentation

API is documented at https://webloan.herokuapp.com/documentation

## Built With

<ul>
<li><a href="https://nodejs.org/">NodeJS</a></li>
<li><a href="https://expressjs.com/">ExpressJS</a></li>
<li><a href="https://developer.mozilla.org/bm/docs/Web/JavaScript">JavaScript</a></li>
</ul>

## Getting Started

### Installation

- Clone this repository using `git clone https://github.com/an-apluss/loan.git`
- Use the `.env.sample` file to setup your environment variables and rename the file to `.env`
- Run `npm install` to install all dependencies
- Run `npm start` to start the server

<ul><li>Run Test</li></ul>
<pre><code>npm test</code></pre>
<br>
<ul><li>Run Coverage Report</li></ul>
<pre><code>npm run coverage</code></pre>
<br>

### API Routes

|        DESCRIPTION                            | HTTP METHOD | ROUTES                 |
| :-------------------------------------------: | ----------- | -----------------------|
| Sign up User                                  | POST        | /api/v1/auth/signup    |
| Log in User                                   | POST        | /api/v1/auth/signin    |
| Get Available Loan                            | GET         | /api/v1/loan           |
| Apply for Loan                                | POST        | /api/v1/loan           |


## License

&copy; Anuoluwapo Akinseye

Licensed under the [MIT License](https://github.com/an-apluss/loan/blob/develop/LICENSE)