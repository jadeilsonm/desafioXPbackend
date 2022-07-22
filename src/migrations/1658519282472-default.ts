import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658519282472 implements MigrationInterface {
    name = 'default1658519282472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`accounts\` (\`codCliente\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(100) NOT NULL, \`email\` varchar(150) NOT NULL, \`password\` varchar(255) NOT NULL, \`valor\` double NOT NULL DEFAULT '0', UNIQUE INDEX \`IDX_ee66de6cdc53993296d1ceb8aa\` (\`email\`), PRIMARY KEY (\`codCliente\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`investiments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`qtdeAtivo\` int NOT NULL, \`codCliente\` int NULL, \`codAtivo\` int NULL, UNIQUE INDEX \`REL_4b88b33656f217500bcd551c78\` (\`codAtivo\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`actives\` (\`codAtivo\` int NOT NULL AUTO_INCREMENT, \`qtdeAtivo\` int NOT NULL, \`valor\` decimal NOT NULL, \`name\` varchar(255) NOT NULL, \`codCliente\` int NULL, PRIMARY KEY (\`codAtivo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`investiments\` ADD CONSTRAINT \`FK_77e61df2b781d8651ebae28dd54\` FOREIGN KEY (\`codCliente\`) REFERENCES \`accounts\`(\`codCliente\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`investiments\` ADD CONSTRAINT \`FK_4b88b33656f217500bcd551c783\` FOREIGN KEY (\`codAtivo\`) REFERENCES \`actives\`(\`codAtivo\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`actives\` ADD CONSTRAINT \`FK_0e0a8f62d0fe72b84a7a9afa97c\` FOREIGN KEY (\`codCliente\`) REFERENCES \`accounts\`(\`codCliente\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`actives\` DROP FOREIGN KEY \`FK_0e0a8f62d0fe72b84a7a9afa97c\``);
        await queryRunner.query(`ALTER TABLE \`investiments\` DROP FOREIGN KEY \`FK_4b88b33656f217500bcd551c783\``);
        await queryRunner.query(`ALTER TABLE \`investiments\` DROP FOREIGN KEY \`FK_77e61df2b781d8651ebae28dd54\``);
        await queryRunner.query(`DROP TABLE \`actives\``);
        await queryRunner.query(`DROP INDEX \`REL_4b88b33656f217500bcd551c78\` ON \`investiments\``);
        await queryRunner.query(`DROP TABLE \`investiments\``);
        await queryRunner.query(`DROP INDEX \`IDX_ee66de6cdc53993296d1ceb8aa\` ON \`accounts\``);
        await queryRunner.query(`DROP TABLE \`accounts\``);
    }

}
