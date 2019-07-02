const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { authenticate } = require('../helpers/00-auth/auth-model');

const server = express();

const authRouter = require('../helpers/00-auth/auth-router')
const userRouter = require('../helpers/01-user/user-router');
const workoutRouter = require('../helpers/02-workout/workout-router');
const exerciseRouter = require('../helpers/03-exercise/exercise-router');
const targetRouter = require('../helpers/04-targetarea/target-router');
const setRouter = require('../helpers/05-set/set-router');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/auth', authRouter);
server.use('/users', userRouter);
server.use('/workouts', workoutRouter);
server.use('/exercises', exerciseRouter);
server.use('/targets', targetRouter);
server.use('/sets', setRouter);

server.get('/', (req, res) => {
    res.send("I'm on it boss!")
});

module.exports = server;