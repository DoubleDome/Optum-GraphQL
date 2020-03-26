const fs = require('fs');
const npath = require('path')
const { gql } = require('apollo-server');

module.exports = {
  mergeSchemas: function(path) {
    let files = fs.readdirSync(path);
    let result = '';
    files.forEach(file => {
      result += require(`${path}/${file}`);
    });
    return gql(`${result}`);
  },
  mergeResolvers: function(path) {
    let files = fs.readdirSync(path);
    let result = {};
    files.forEach(file => {
      result = Object.assign(result, require(`${path}/${file}`));
    });
    return result;
  }
};
