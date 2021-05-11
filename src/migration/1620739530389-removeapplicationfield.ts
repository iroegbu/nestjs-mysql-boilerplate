import {MigrationInterface, QueryRunner} from "typeorm";

export class removeapplicationfield1620739530389 implements MigrationInterface {
    name = 'removeapplicationfield1620739530389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `application`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `application` varchar(255) NOT NULL");
    }

}
