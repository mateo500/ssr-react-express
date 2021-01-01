import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import fs from 'fs';
import path from 'path';

export const reactRenderer = (req, res, Component) => {
  return fs.readFile(
    path.resolve('./dist/index.html'),
    'utf-8',
    (err, data) => {
      if (err) return res.status(500).send('internal server error');

      return res
        .send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">${ReactDOMServer.renderToString(
              <StaticRouter location={req.url}>
                <Component />
              </StaticRouter>
            )}</div>`
          )
        )
        .status(200);
    }
  );
};
