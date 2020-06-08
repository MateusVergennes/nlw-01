import Knex from 'knex';

export async function up(knex: Knex) {
    //CRIAR TABELA, ADD CAMPO, ETC
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}
export async function down(knex: Knex) {
    //VOLTAR ATREAS (DELETAR A TABELA), TIRAR CAMPO, ETC
    return knex.schema.dropTable('items');
}