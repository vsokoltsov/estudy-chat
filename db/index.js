var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    database : 'estudy_development',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry')
module.exports = bookshelf;
