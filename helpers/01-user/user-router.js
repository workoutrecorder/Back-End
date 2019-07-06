const router = require('express').Router();
const Users = require('./user-model');

router.get('/', async (req, res) => {
    try{
        users = await Users.find();
        res.status(200).json(users);
    } catch(error){
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try{
        user = await Users.findById(req.params.id)
        if(user){
            res.status(200).json(user)
        } else {
            res.status(404).send('user not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

//Get Users  Workouts
router.get('/:user_id/workouts/', async (req, res) => {
    try{
        let user = await Users.getUserWorkouts(req.params.user_id)
        if(user){
            res.status(200).json(user)
        } else {
            res.status(404).send('user workouts not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

//Get Users Sets
router.get('/:user_id/sets/', async (req, res) => {
    try{
        let user = await Users.getUsersSets(req.params.user_id)
        if(user){
            res.status(200).json(user)
        } else {
            res.status(404).send('users sets not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

//Get Users targetAreas
router.get('/:user_id/targetareas/', async (req, res) => {
    try{
        let user = await Users.getUsersTarget(req.params.user_id)
        if(user){
            res.status(200).json(user)
        } else {
            res.status(404).send('user target area not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.post('/:workout_id/workouts', async (req, res) => {
    try{
        const workout = await Users.addWorkoutToUser({ name: req.body.name, date: req.body.date, user_id: req.params.workout_id})
        if(workout){
            res.status(200).json({workout})
        } else {
            res.status(404).send('could not post workout for the user')
        }
    } catch(error){
        res.status(500).json(error);
    }
})
    

module.exports = router;