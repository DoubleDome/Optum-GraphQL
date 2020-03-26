const handlers = {
  order: require('../handlers/order')
};

module.exports = {
  Query: {
    orders: handlers.order.fetchOrders
  }
};
