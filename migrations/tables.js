exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (tbl) => {
  
        tbl.increments();

        tbl.string('email', 255)
            .notNullable()
        
        tbl.string('username', 255)
           .notNullable()
           .unique()
        
        tbl.string('password', 255)
           .notNullable()
  
    })
  
    .createTable('workouts', (tbl) => {

        tbl.increments();

        tbl.string('name', 255) //WORKOUT NAME example LEG DAY
           .notNullable() //required
        
        tbl.date('date', 255) //Date the workout takes place

        tbl.integer('user_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE') //required
    })
  
    .createTable('exercises', (tbl) => {

        tbl.increments()
        
        tbl
            .string('name', 255) //exercise name 
            .notNullable() //required

        tbl
            .integer('workout_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('workouts')
            .onDelete('CASCADE')
            .onUpdate('CASCADE') //required
    })
  
    .createTable('targetAreas', (tbl) => {

        tbl.increments()
        
        tbl
            .string('name', 255) //Target Area Name 
            .notNullable() //required

        tbl
            .integer('exercise_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('exercises')
            .onDelete('CASCADE')
            .onUpdate('CASCADE') //required

          tbl.integer('user_id').notNullable()
             .unsigned()
             .references('id')
             .inTable('users')
             .onDelete('CASCADE')
             .onUpdate('CASCADE')
    })

    .createTable('sets', (tbl) => {

        tbl.increments()
        tbl
            .integer('reps')
            .notNullable() //required
        
        tbl
            .integer('weight')
            .notNullable() //required
       
        tbl
            .integer('exercise_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('exercises')
            .onDelete('CASCADE')
            .onUpdate('CASCADE') //required

        tbl.integer('user_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex, Promise) {
        return knex.schema
            .dropTableIfExists('users')
            .dropTableIfExists('workouts')
            .dropTableIfExists('exercises')
            .dropTableIfExists('targetAreas')
            .dropTableIfExists('sets')
  };