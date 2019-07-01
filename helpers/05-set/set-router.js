router = require('express').Router();

const Sets = require('./set-model');

router.get('/', async (req, res) => {
    try{
        sets = await Sets.find();
        res.status(200).json(sets);
    } catch(error){
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try{
        set = await Sets.findById(req.params.id)
        if(set){
            res.status(200).json(set)
        } else {
            res.status(404).send('set not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    try{
        set = await Sets.add(req.body)
        res.status(200).json(set)
    } catch(error){
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        count  = await Sets.destroy(req.params.id)
        if(count > 0){
            res.status(200).json('The set has been removed')
        } else {
            res.status(401).json('could not find the set you are trying to delete')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        set = await Sets.update(req.params.id, req.body)
        if(set){
            res.status(200).json(set)
        } else {
            res.status(500).json(error)
        }
            
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;