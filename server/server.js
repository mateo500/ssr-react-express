import express from 'express';
import path from 'path';
import { reactRenderer } from './reactRenderer';
import App from '../src/App';

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  reactRenderer(req, res, App);
});

app.get('/discover', (req, res) => {
  reactRenderer(req, res, App);
});

app.get('/manage', (req, res) => {
  reactRenderer(req, res, App);
});

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.use('*', (req, res, next) => {
  const requiredPath = req.baseUrl.split('/');

  const definitivePath =
    requiredPath.length > 1 ? requiredPath[1] : requiredPath[0];

  if (definitivePath === '') {
    return next();
  }
  return res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});
