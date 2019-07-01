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

module.exports = router;