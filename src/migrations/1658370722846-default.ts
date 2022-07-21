import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1658370722846 implements MigrationInterface {
  name = 'default1658370722846';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `accounts` CHANGE `Valor` `Valor` decimal NOT NULL DEFAULT \'0\'');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `accounts` CHANGE `Valor` `Valor` decimal NOT NULL');
  }

}
