const DatabaseOps = require('../services/dbOperations.js');

module.exports = class Router {
  static async route(operation, data) {
    switch (operation) {
      case 'deleteUser':
        try {
          const username = data;
          return new DatabaseOps().deleteUser(username);
        } catch (err) {
          throw new Error('Could not delete user', err);
        }
      case 'validateUser':
        try {
          const { user } = data;
          return new DatabaseOps().validateUser(user);
        } catch (err) {
          throw new Error('Could not validate token', err);
        }
      default:
        return 'Did not match';
    }
  }
};
