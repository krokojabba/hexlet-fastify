import fastify from 'fastify';

const app = fastify();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send('GET /users');
});

app.post('/users', (req, res) => {
  res.send('POST /users');
});

app.get('/hello', (req, res) => {
  const name = req.query.name ?? 'World';
  res.send(`Hello, ${name}!`);
});

app.get('/users/:userId/post/:postId', (req, res) => {
  const userId = req.params.userId;
  const postId = req.params.postId;
  res.send(`userId: ${userId}; postId: ${postId}`);
});

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`);
});