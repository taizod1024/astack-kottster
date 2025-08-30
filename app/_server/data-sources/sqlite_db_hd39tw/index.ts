import { KnexBetterSqlite3Adapter } from '@kottster/server';
import knex from 'knex';

/**
 * Learn more at https://knexjs.org/guide/#configuration-options
 */
const client = knex({
  client: 'better-sqlite3',
  connection: {
    filename: 'db/database.sqlite',
  }
});

export default new KnexBetterSqlite3Adapter(client);