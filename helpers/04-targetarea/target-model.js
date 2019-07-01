const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    destroy,
    update
}

function find(){
    return db('targetAreas')
}

function findById(id) {
    return db('targetAreas')
      .where({ id })
      .first();
  }

async function add(targetAreas){
    const [id] = await db('targetAreas').insert(targetAreas);

    return db('targetAreas').where({ id }).first()
}

function destroy(id){
    return db('targetAreas').where({ id }).del()
}

function update(id, changes){
    return db('targetAreas').where({ id }).update(changes)
}