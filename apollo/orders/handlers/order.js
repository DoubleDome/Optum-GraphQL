const fetch = require('isomorphic-unfetch');

module.exports = {
  fetchOrders: async function(parent, args, context) {
    let id = parent ? parent.id : args.id;
    return await fetch(`${context.baseURL}/orders/${id}`).then(res => res.json());
  }
};
