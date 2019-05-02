const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
const router = new Router();

router
  .get('/', ctx => {
    ctx.body = 'Home';
  })
  .get('/profile', ctx => {
    ctx.body = 'Profile';
  })
  .post('/profile', ctx => {
    ctx.body = 'New Profile';
  });

server.use(router.routes());

server.listen(3003, () => {
  console.log('Koa Server HTTP listening on port: 3003');
});
