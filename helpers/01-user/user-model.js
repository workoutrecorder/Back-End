const db = require('../../data/dbConfig');

module.exports = {
    find,
    getBy,
    findById,
    destroy,
    add,
    getUserWorkouts,
    addWorkoutToUser,
    getUsersTarget,
    getUsersSets,
}

function find(){
    return db('users')
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }

async function add(user){
    const [id] = await db('users').insert(user);

    return db('users').where({ id }).first()
}

function getBy(select){
    return db('users').where(select).first();
}


function destroy(id){
    return db('users').where({ id }).del()
}

function getUserWorkouts(userID){
    return db('workouts')
        .join('users', 'users.id', 'workouts.user_id')
        .select('workouts.*' )
        .where('workouts.user_id', userID)
}

function addWorkoutToUser(workout){
    return db('workouts')
    .insert({
        name: workout.name,
        date: workout.date,
        user_id: workout.user_id
    })
}

function getUsersTarget(userID){
    return db('targetAreas')
        .join('users', 'users.id', 'targetAreas.user_id')
        .select('targetAreas.*' )
        .where('targetAreas.user_id', userID)
}

function getUsersSets(userID){
    return db('sets')
        .join('users', 'users.id', 'sets.user_id')
        .select('sets.*' )
        .where('sets.user_id', userID)
}