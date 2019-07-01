const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    destroy,
    update
}

function find(){
    return db('sets')
}

function findById(id) {
    return db('sets')
      .where({ id })
      .first();
  }

async function add(set){
    const [id] = await db('sets').insert(set);

    return db('sets').where({ id }).first()
}

function destroy(id){
    return db('sets').where({ id }).del()
}

function update(id, changes){
    return db('sets').where({ id }).update(changes)
}