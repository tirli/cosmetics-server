import knex from 'knex';
import bookshelf from 'bookshelf';

import config from './config.json';

const k = knex(config);
const b = bookshelf(k);

export default b;
