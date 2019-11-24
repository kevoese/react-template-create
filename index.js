#!/usr/bin/env node
const fs = require('fs');
let config = require('./config');
const getInfo = require('./utils');
const templates = require('./utils/templates');
const [, , ...args] = process.argv;

const setup = getInfo(args, config);

fs.mkdir(setup.path, { recursive: true }, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    try {
      if (setup.test) {
        fs.writeFileSync(
          `${setup.path}/index.${config.testExt}`,
          templates.testFile(setup.name),
          {flag: 'wx'}
        );
      }
      if (setup.style) {
        fs.writeFileSync(
          `${setup.path}/${setup.name}.${config.styleExt}`,
          '',
          {flag: 'wx'}
        );
      }
    } catch (err) {
      console.log(err.message);
    }

    fs.writeFile(
      `${setup.path}/index.${config.reactExt}`,
      templates.reactFile(setup.compType, setup.name, {status: setup.style, ext: config.styleExt}),
      {flag: 'wx'},
      err => {
        if (err) {
          throw err;
        } else {
          console.log('Template generated successfully');
        }
      }
    );
  }
});
