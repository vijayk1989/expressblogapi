exports.up = function(knex) {
  return knex.schema.createTable('blogposts', table => {
    table.increments('blog_id');
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.timestamp('create_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knew.schema.dropTable('blogposts');
};
