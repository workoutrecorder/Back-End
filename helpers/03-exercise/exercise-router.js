router = require('express').Router();

const Exercises = require('./exercise-model');

router.get('/', async (req, res) => {
    try{
        exercises = await Exercises.find();
        res.status(200).json(exercises);
    } catch(error){
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try{
        exercise = await Exercises.findById(req.params.id)
        if(exercise){
            res.status(200).json(exercise)
        } else {
            res.status(404).send('exercise not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    try{
        exercise = await Exercises.add(req.body);
        res.status(200).json(exercise);
    } catch(error){
        res.status(500).json(error)
    }
})

router.post('/:exercise_id/sets', async (req, res) => {
    try{
        const id = Number(req.params.exercise_id)
        const set = await Exercises.addSetsToExercises({ reps: req.body.reps, weight: req.body.weight, exercise_id: id, user_id: req.body.user_id })
        if(set){
            res.status(200).json(set)
        } else {
            res.status(404).send('could not post sets to exercise')
        }
    } catch(error){
        res.status(500).json(error);
    }
})

router.post('/:exercise_id/targetarea', async (req, res) => {
    try{
        const id = Number(req.params.exercise_id)
        const targetArea = await Exercises.addTargetAreaToExercises({ name: req.body.name, exercise_id: id, user_id: req.body.user_id })
        if(targetArea){
            res.status(200).json(targetArea)
        } else {
            res.status(404).send('could not post targetArea to exercise')
        }
    } catch(error){
        res.status(500).json(error);
    }
})


router.delete('/:id', async (req, res) => {
    try{
        count = await Exercises.destroy(req.params.id);
        if(count > 0){
            res.status(200).json('exercise destroyed')
        } else {
            res.status(401).json('could not find exercise')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.get('/:exercise_id/sets/', async (req, res) => {
    try{
        let sets = await Exercises.getExerciseSets(req.params.exercise_id)
        if(sets){
            res.status(200).json(sets)
        } else {
            res.status(404).send('exercise sets not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.get('/:exercise_id/targetarea/', async (req, res) => {
    try{
        let targetArea = await Exercises.getExerciseSets(req.params.exercise_id)
        if(targetArea){
            res.status(200).json(targetArea)
        } else {
            res.status(404).send('exercise target area not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.put('/:id', async (req, res) => {
    try{
        let exercise = await Exercises.update(req.params.id, req.body)
        if(exercise){
            res.status(200).json(exercise)
        } else {
            res.status(404).json('could not update')
        }
    } catch(exercise) {
            res.status(500).json(error)
    }
});

module.exports = router;