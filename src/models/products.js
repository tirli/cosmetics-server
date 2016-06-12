import bookshelf from 'orm';

import Producer from './producer';

export default bookshelf.Model.extend({
  tableName: 'products',
  producer() {
    return this.belongsTo(Producer);
  },
});
