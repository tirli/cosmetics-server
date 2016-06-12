import Koa from 'koa';
import logger from 'koa-logger';
import parser from 'koa-bodyparser';
import router from 'koa-route';

import {
  list as productList,
  create as productCreate,
} from 'controllers/products';

const app = new Koa();

app.use(logger());
app.use(parser());

app.use(router.get('/products', productList));
app.use(router.post('/products', productCreate));

app.listen(3000);
