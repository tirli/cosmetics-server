import Product from 'models/products';

export async function list() {
  this.body = [{
    a: 'aa',
    b: 'ba',
  }, {
    a: 'aa',
    b: 'ba',
  }];
}

export async function create() {
  new Product(this.request.body).save().then(model => {
    this.body = model;
  });
}
