import bookshelf from 'orm';

import Product from './products';

export default bookshelf.Model.extend({
  tableName: 'products',
  producer() {
    return this.hasMany(Product);
  },
});
