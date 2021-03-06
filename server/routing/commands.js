const DatabaseOps = require('../services/dbOperations');

module.exports = class Router {
  static async route(operation) {
    switch (operation) {
      case 'getUsers':
        try {
          return new DatabaseOps().getUsers();
        } catch (err) {
          throw new Error('Could not retrieve users');
        }

      default:
        return 'Unexpected Error';
    }
  }
};
