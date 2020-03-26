const handlers = {
  user: require('../handlers/user')
};

module.exports = {
  User: {
    age: handlers.user.calculateAge,
    name: handlers.user.concatenateName,
    abbreviatedName: handlers.user.createAbbreviatedName,
    managedUsers: handlers.user.fetchManagedUsers
  }
};
