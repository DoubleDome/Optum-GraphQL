const handlers = {
  order: require('../handlers/order')
};

module.exports = {
  Order: {
    message: handlers.order.nestedMessage
  }
};
