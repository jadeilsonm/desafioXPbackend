import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1658006285003 implements MigrationInterface {
  name = 'default1658006285003';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE `actives` (`CodAtivo` int NOT NULL AUTO_INCREMENT, `QtdeAtivo` int NOT NULL, `Valor` decimal NOT NULL, PRIMARY KEY (`CodAtivo`)) ENGINE=InnoDB');
    await queryRunner.query('CREATE TABLE `accounts` (`codCliente` int NOT NULL AUTO_INCREMENT, `valor` decimal NOT NULL, PRIMARY KEY (`codCliente`)) ENGINE=InnoDB');
    await queryRunner.query('CREATE TABLE `investiments` (`CodAtivo` int NOT NULL AUTO_INCREMENT, `QtdeAtivo` int NOT NULL, `CodCliente` int NOT NULL, PRIMARY KEY (`CodAtivo`)) ENGINE=InnoDB');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `investiments`');
    await queryRunner.query('DROP TABLE `accounts`');
    await queryRunner.query('DROP TABLE `actives`');
  }

}
