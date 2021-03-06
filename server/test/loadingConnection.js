/* eslint-disable consistent-return */
/* eslint-disable func-names */
const loadtest = require('loadtest');

//5000 request per test, scaling concurrency in each request x5, on different routes
//this test are kind of slow to run so make sure to give it time, around 15 seconds on a 6 core machine

loadtest.loadTest(
  { url: 'http://localhost:5000', maxRequests: 5000, concurrency: 5 },
  function (error, result) {
    if (error) {
      return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
    console.log(result);
  }
);

loadtest.loadTest(
  {
    url: 'http://localhost:5000/discover',
    maxRequests: 5000,
    concurrency: 10,
  },
  function (error, result) {
    if (error) {
      return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
    console.log(result);
  }
);

loadtest.loadTest(
  { url: 'http://localhost:5000/manage', maxRequests: 5000, concurrency: 15 },
  function (error, result) {
    if (error) {
      return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
    console.log(result);
  }
);
