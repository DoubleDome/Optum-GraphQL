const handlers = {
  user: require('../handlers/user')
};

module.exports = {
  Query: {
    user: handlers.user.fetchUser
  }
};