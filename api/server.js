const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { authenticate } = require('../helpers/00-auth/auth-model');

const server = express();

const authRouter = require('../helpers/00-auth/auth-router')
const userRouter = require('../helpers/01-user/user-router');
const workoutRouter = require('../helpers/02-workout/workout-router');
const exerciseRouter = require('../helpers/03-exercise/exercise-router');
const setRouter = require('../helpers/04-set/set-router');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/auth', authRouter);
server.use('/users', authenticate, userRouter);
server.use('/workouts', authenticate, workoutRouter);
server.use('/exercises', authenticate, exerciseRouter);
server.use('/sets', authenticate, setRouter);

server.get('/', (req, res) => {
    res.send("I'm on it boss!")
});

module.exports = server;