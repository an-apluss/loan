const storage = {
  users: [
    {
      id: 1,
      email: 'anuoluwapoakinseye@gmail.com',
      first_name: 'anuoluwapo',
      last_name: 'akinseye',
      password: '$2b$10$iNkZIHC8.O2.IMttA3scg.ijA2ujMR3NJyM4.Oouo.AE06X0eK3LK',
      address: '25, olaosebikan street, Agbado, Lagos',
      occupation: 'software developer'
    },
    {
      id: 2,
      email: 'taiwoakin@gmail.com',
      first_name: 'taiwo',
      last_name: 'akin',
      password: '$2b$10$iNkZIHC8.O2.IMttA3scg.ijA2ujMR3NJyM4.Oouo.AE06X0eK3LK',
      address: '2, surulere street, Nodopassyourself, Lagos',
      occupation: 'trader'
    }
  ],
  loans: [
    {
      id: 1,
      name: 'Ren money',
      description: 'Salary earners discounted loan',
      interest_rate: '3%',
      amount: 50000,
      tenure: '1.5yrs'
    },
    {
      id: 2,
      name: 'Kia Kia',
      description: 'Easy small loan',
      interest_rate: '5%',
      amount: 5000,
      tenure: '3months'
    }
  ]
};

export default storage;
