// Update with your config settings.
const DBConnection = {
  host: 'heroku',
  database: 'user',
  username:'Zech',
  password: 'password'
}

const workoutDBConnection = process.env.DATABASE_URL || DBConnection

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/dev.sqlite3'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: workoutDBConnection,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
