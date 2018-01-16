
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ratings', function (table) {
            table.increments();
            table.integer('noodle').notNull();
            table.integer('broth').notNull();
            table.integer('chashu').notNull();
            table.integer('accompaniments').notNull();
            table.integer('gyoza').notNull();
            table.integer('ramenshops_id').unsigned().references('id').inTable('ramenshops').notNull()
            table.integer('users_id').unsigned().references('id').inTable('users').notNull()         
            table.timestamp('created_at').defaultTo(knex.fn.now());         
        })
    ])
};
 
exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('ratings')
    ])
};
