const handlers = {
  order: require('../handlers/order')
};

module.exports = {
  User: {
    orders: handlers.order.fetchOrders
  }
};
