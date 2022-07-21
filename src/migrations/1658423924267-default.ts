import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658423924267 implements MigrationInterface {
    name = 'default1658423924267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`accounts\` DROP COLUMN \`Valor\``);
        await queryRunner.query(`ALTER TABLE \`accounts\` ADD \`Valor\` double NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`accounts\` DROP COLUMN \`Valor\``);
        await queryRunner.query(`ALTER TABLE \`accounts\` ADD \`Valor\` decimal NOT NULL DEFAULT '0'`);
    }

}
