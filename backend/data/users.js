import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kim Rungring',
    email: 'rungring@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kim Mimie',
    email: 'mimie@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
