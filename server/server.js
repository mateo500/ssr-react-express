import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../src/App';

const PORT = process.env.PORT || 5000;

const app = express();

app.use('^/$', (req, res) => {
  fs.readFile(path.resolve('./dist/index.html'), 'utf-8', (err, data) => {
    if (err) return res.status(500).send('internal server error');

    const context = {};

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});
