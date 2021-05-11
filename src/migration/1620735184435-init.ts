import {MigrationInterface, QueryRunner} from "typeorm";

export class init1620735184435 implements MigrationInterface {
    name = 'init1620735184435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(36) NOT NULL, `nick` varchar(255) NOT NULL, `dateCreated` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
