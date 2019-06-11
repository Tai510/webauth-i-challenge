const express = require('express');
const helmet = require('helmet');
const session = require('express-session');



const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

const sessionConfig = {
  name: 'donkey', 
  secret: 'keep it secret, keep it oneHunnid!',
  resave: false, 
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 10, 
    secure: false, 
    httpOnly: true, 
  },
};

server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig));


server.get('/', (req, res) => {
  res.send("It's alive!");
});

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

module.exports = server;
