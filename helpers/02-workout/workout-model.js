const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    destroy,
    getWorkoutExercises,
    addExerciseToWorkout
}

function find(){
    return db('workouts')
}

function findById(id) {
    return db('workouts')
      .where({ id })
      .first();
  }

async function add(workout){
    const [id] = await db('workouts').insert(workout);

    return db('workouts').where({ id }).first()
}

function addExerciseToWorkout(exercise){
    return db('exercises')
    .insert({
        name: exercise.name,
        targetArea: exercise.targetArea,
        workout_id: exercise.workout_id
    })
}


function destroy(id){
    return db('workouts').where({ id }).del()
}

function update(id, changes) {
    return db('workouts')
      .where({ id })
      .update(changes);
  }

function getWorkoutExercises(workoutID){
    return db('exercises')
        .join('workouts', 'workouts.id', 'exercises.workout_id')
        .select('exercises.*')
        .where('exercises.workout_id', workoutID)
}
