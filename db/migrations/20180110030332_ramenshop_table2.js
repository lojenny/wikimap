
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ramenshops', function (table) {
            table.increments();
            table.string('name');
            table.string('location');
            table.timestamp('created_at').defaultTo(knex.fn.now());         
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('ramenshops')
    ])
};
