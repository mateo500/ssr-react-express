import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../src/App';

const PORT = process.env.PORT || 5000;

const app = express();

const reactRenderer = (req, res) => {
  return fs.readFile(
    path.resolve('./dist/index.html'),
    'utf-8',
    (err, data) => {
      if (err) return res.status(500).send('internal server error');

      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
              <App />
            </StaticRouter>
          )}</div>`
        )
      );
    }
  );
};

app.get('/', (req, res) => {
  reactRenderer(req, res);
});

app.get('/discover', (req, res) => {
  reactRenderer(req, res);
});

app.get('/manage', (req, res) => {
  reactRenderer(req, res);
});

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.use('*', (req, res, next) => {
  const requiredPath = req.baseUrl.split('/');

  const definitivePath =
    requiredPath.length > 1 ? requiredPath[1] : requiredPath[0];

  if (definitivePath === '') {
    return next();
  }
  return res.status(404).send('ulost');
});

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});
