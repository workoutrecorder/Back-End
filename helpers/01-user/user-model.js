const db = require('../../data/dbConfig');

module.exports = {
    find,
    getBy,
    findById,
    destroy,
    add,
    getUserWorkouts,
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
