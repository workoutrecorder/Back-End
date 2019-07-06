const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    destroy,
    getExerciseSets,
    update,
    addSetsToExercises,
    addTargetAreaToExercises,
    getExerciseTargetArea
  
}

function find(){
    return db('exercises');
}

function findById(id) {
    return db('exercises')
      .where({ id })
      .first();
  }

async function add(exercise){
    const [id] = await db('exercises').insert(exercise);

    return db('exercises').where({ id }).first()
}

function addSetsToExercises(set){
    return db('sets')
    .insert({
        reps: set.reps,
        weight: set.weight,
        exercise_id: set.exercise_id,
        user_id: set.user_id
    })
}

function addTargetAreaToExercises(target){
    return db('targetAreas')
    .insert({
        name: target.name,
        exercise_id: target.exercise_id,
        user_id: target.user_id
    })
}


function destroy(id){
    return db('exercises').where({ id }).del()
}

function getExerciseSets(exerciseID){
    return db('sets')
        .join('exercises', 'exercises.id', 'sets.exercise_id')
        .select('sets.*')
        .where('sets.exercise_id', exerciseID)
}

function getExerciseTargetArea(exerciseID){
    return db('targetAreas')
        .join('exercises', 'exercises.id', 'targetAreas.exercise_id')
        .select('targetAreas.*')
        .where('targetAreas.exercise_id', exerciseID)
}


function update(id, changes){
    return db('exercises').where({ id }).update(changes)
}
