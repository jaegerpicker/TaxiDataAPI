var mongoose = require('mongoose');

exports.default = {
  mongo: function(api) {
      return {
        package:   'mongoose',
        host:      'mongodb-codeart.cloudapp.net',
        port:      27017,
        password:  null,
        options:   null,
        database:  'taxi' 
      };
  }
};
