import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658436244025 implements MigrationInterface {
    name = 'default1658436244025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`accounts\` (\`CodCliente\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(100) NOT NULL, \`email\` varchar(150) NOT NULL, \`password\` varchar(255) NOT NULL, \`Valor\` double NOT NULL DEFAULT '0', UNIQUE INDEX \`IDX_ee66de6cdc53993296d1ceb8aa\` (\`email\`), PRIMARY KEY (\`CodCliente\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`investiments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`QtdeAtivo\` int NOT NULL, \`codCliente\` int NULL, \`activeCodAtivo\` int NULL, UNIQUE INDEX \`REL_9f75a8380ef98088d791240772\` (\`activeCodAtivo\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`actives\` (\`CodAtivo\` int NOT NULL AUTO_INCREMENT, \`QtdeAtivo\` int NOT NULL, \`Valor\` decimal NOT NULL, \`name\` varchar(255) NOT NULL, \`codCliente\` int NULL, UNIQUE INDEX \`IDX_80e69de48247a672693fe90a89\` (\`name\`), PRIMARY KEY (\`CodAtivo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`investiments\` ADD CONSTRAINT \`FK_77e61df2b781d8651ebae28dd54\` FOREIGN KEY (\`codCliente\`) REFERENCES \`accounts\`(\`CodCliente\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`investiments\` ADD CONSTRAINT \`FK_9f75a8380ef98088d7912407721\` FOREIGN KEY (\`activeCodAtivo\`) REFERENCES \`actives\`(\`CodAtivo\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`actives\` ADD CONSTRAINT \`FK_0e0a8f62d0fe72b84a7a9afa97c\` FOREIGN KEY (\`codCliente\`) REFERENCES \`accounts\`(\`CodCliente\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`actives\` DROP FOREIGN KEY \`FK_0e0a8f62d0fe72b84a7a9afa97c\``);
        await queryRunner.query(`ALTER TABLE \`investiments\` DROP FOREIGN KEY \`FK_9f75a8380ef98088d7912407721\``);
        await queryRunner.query(`ALTER TABLE \`investiments\` DROP FOREIGN KEY \`FK_77e61df2b781d8651ebae28dd54\``);
        await queryRunner.query(`DROP INDEX \`IDX_80e69de48247a672693fe90a89\` ON \`actives\``);
        await queryRunner.query(`DROP TABLE \`actives\``);
        await queryRunner.query(`DROP INDEX \`REL_9f75a8380ef98088d791240772\` ON \`investiments\``);
        await queryRunner.query(`DROP TABLE \`investiments\``);
        await queryRunner.query(`DROP INDEX \`IDX_ee66de6cdc53993296d1ceb8aa\` ON \`accounts\``);
        await queryRunner.query(`DROP TABLE \`accounts\``);
    }

}
