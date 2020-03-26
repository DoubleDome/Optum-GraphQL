const fetch = require('isomorphic-unfetch');
const moment = require('moment');

module.exports = {
  concatenateName: function(parent, args, context) {
    return `${parent.firstname} ${parent.lastname}`;
  },

  createAbbreviatedName: function(parent, args, context) {
    return `${parent.firstname} ${parent.lastname.charAt(0)}.`;
  },

  calculateAge: function(parent, args, context) {
    return moment().diff(parent.birthdate, 'years');
  },

  fetchUser: async function(parent, args, context) {
    let id = parent ? parent.id : args.id;
    return await fetch(`${context.baseURL}/user/${id}`).then(res => res.json());
  },

  fetchManagedUsers: async function(parent, args, context) {
    let id = parent ? parent.id : args.id;
    return await fetch(`${context.baseURL}/user/${id}/managing`).then(res => res.json());
  }
};
