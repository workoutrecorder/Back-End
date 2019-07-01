router = require('express').Router();

const TargetAreas = require('./target-model');

router.get('/', async (req, res) => {
    try{
        targetAreas = await TargetAreas.find();
        res.status(200).json(targetAreas );
    } catch(error){
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try{
        targetArea = await TargetAreas.findById(req.params.id)
        if(targetArea){
            res.status(200).json(targetArea)
        } else {
            res.status(404).send('target area not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    try{
        targetArea = await TargetAreas.add(req.body)
        res.status(200).json(targetArea)
    } catch(error){
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        count  = await TargetAreas.destroy(req.params.id)
        if(count > 0){
            res.status(200).json('The target area has been removed')
        } else {
            res.status(401).json('could not find the target area you are trying to delete')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        targetArea = await TargetAreas.update(req.params.id, req.body)
        if(targetArea){
            res.status(200).json(targetArea)
        } else {
            res.status(500).json(error)
        }
            
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;