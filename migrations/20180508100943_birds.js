exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('birds', table => {
    table.increments('id')
    table.string('name')
    table.string('image_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('birds')
};
