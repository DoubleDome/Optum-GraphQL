const fetch = require('isomorphic-unfetch');

module.exports = {
  nestedMessage: async function (parent, args, context) {
    return parent.nested1.nested2.nested3.message;
  },
  fetchOrders: async function(parent, args, context) {
    let id = parent ? parent.id : args.id;
    return await fetch(`${context.baseURL}/orders/${id}`).then(res => res.json());
  }
};
