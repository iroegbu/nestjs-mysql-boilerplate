import {MigrationInterface, QueryRunner} from "typeorm";

export class userapplication1620739002609 implements MigrationInterface {
    name = 'userapplication1620739002609'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `application` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `application`");
    }

}
