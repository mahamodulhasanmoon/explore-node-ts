import express from 'express';
const routes = express.Router();



routes.get('/health', (req, res) => {
  res.send('Hello World!');
});

export default routes;