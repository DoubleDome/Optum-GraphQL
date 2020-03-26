const fetch = require('isomorphic-unfetch');

module.exports = {
  fetchMedications: async function(parent, args, context) {
    let id = parent ? parent.id : args.id;
    let endpoint = `${context.baseURL}/medications/${id}`;
    if (args.type) {
      endpoint += `/${args.type}`;
    }
    return await fetch(endpoint).then(res => res.json());
  },
  fetchRetailMedicatons: async function(parent, args, context) {
    let id = parent ? parent.id : args.id;
    return await fetch(`${context.baseURL}/medications/${id}/retail`).then(res => res.json());
  },
  fetchActiveMedicatons: async function(parent, args, context) {
    let id = parent ? parent.id : args.id;
    return await fetch(`${context.baseURL}/medications/${id}/active`).then(res => res.json());
  }
};
