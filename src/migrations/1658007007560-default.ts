import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658007007560 implements MigrationInterface {
    name = 'default1658007007560'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`accounts\` (\`codCliente\` int NOT NULL AUTO_INCREMENT, \`valor\` decimal NOT NULL, PRIMARY KEY (\`codCliente\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`actives\` (\`CodAtivo\` int NOT NULL AUTO_INCREMENT, \`QtdeAtivo\` int NOT NULL, \`Valor\` decimal NOT NULL, PRIMARY KEY (\`CodAtivo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`investiments\` (\`CodAtivo\` int NOT NULL AUTO_INCREMENT, \`QtdeAtivo\` int NOT NULL, \`CodCliente\` int NOT NULL, PRIMARY KEY (\`CodAtivo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`email\` varchar(150) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`investiments\``);
        await queryRunner.query(`DROP TABLE \`actives\``);
        await queryRunner.query(`DROP TABLE \`accounts\``);
    }

}
