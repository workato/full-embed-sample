'use strict';

const concurrently = require('concurrently');

const args = process.argv.slice(2).join(' ');

concurrently([
  {
    name: 'server',
    command: `vue-cli-service express:watch ${args}`,
    prefixColor: 'magenta'
  },
  {
    name: 'client',
    // `sleep` is required because Express server should be started before the Vue client for the proxying
    // of XHR requests to work properly
    command: `sleep 3 && vue-cli-service serve ${args}`,
    prefixColor: 'white'
  }
], {
  raw: true,
  killOthers: ['failure', 'success'],
  successCondition: 'first'
}).catch(() => {
  process.exit(1);
});
