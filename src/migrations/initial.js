export function up(knex) {
  knex.schema.createTableIfNotExists('profile', table => {
    table.increments('id');
    table.string('username');
    table.string('password_hash');
    table.string('email');
    table.timestamps();
  });


  knex.schema.createTableIfNotExists('settings', table => {
    table.increments('id');
    table.boolean('should_notify');
    table.time('notification_time');
    table.timestamps();
  });

  knex.schema.createTableIfNotExists('categories', table => {
    table.increments('id');
    table.string('name');
    table.timestamps();
  });


  knex.schema.createTableIfNotExists('producers', table => {
    table.increments('id');
    table.string('name');
    table.timestamps();
  });

  knex.schema.createTableIfNotExists('products', table => {
    table.increments('id');
    table.string('name');
    table.date('expire_at');
    table.integer('price');
    table.string('commentary');
    table.binary('photo');
    table.integer('valid_after_open');
    table.integer('profile_id');
    table.integer('producer_id');
    table.timestamps();
  });


  knex.schema.createTableIfNotExists('products_categories', table => {
    table.integer('category_id')
      .references('id')
      .inTable('category');
    table.integer('product_id')
      .references('id')
      .inTable('products');
  });
}
