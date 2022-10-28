import { MigrationInterface, QueryRunner } from 'typeorm';

import { POOLS_TABLE_NAME } from '../pools.entity';

export class PoolsUpdate1634228660490 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TYPE cauldron_ver_enum AS ENUM ('0', '1', '2');

            ALTER TABLE "${POOLS_TABLE_NAME}" ADD "cauldron_ver" cauldron_ver_enum DEFAULT '0';
            UPDATE "${POOLS_TABLE_NAME}" SET "cauldron_ver" = '0';
            ALTER TABLE "${POOLS_TABLE_NAME}" ALTER COLUMN "cauldron_ver" SET NOT NULL;

            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0x3cfed0439ab822530b1ffbd19536d897ef30d2a2';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0x56984F04d2d04B2F63403f0EbeDD3487716bA49d';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0xC89958B03A55B5de2221aCB25B58B89A000215E6';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0x8E45Af6743422e488aFAcDad842cE75A09eaEd34';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0xed745b045f9495b8bfc7b58eea8e0d0597884e12';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0xd4357d43545F793101b592bACaB89943DC89d11b';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0x920d9bd936da4eafb5e25c6bdc9f6cb528953f9f';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '1' WHERE address = '0x551a7CfF4de931F32893c928bBc3D25bF1Fc5147';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '1' WHERE address = '0xbb02A884621FB8F5BFd263A67F58B65df5b090f3';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0xebfde87310dc22404d918058faa4d56dc4e93f0a';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '1' WHERE address = '0x6Ff9061bB8f97d948942cEF376d98b51fA38B91f';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0x003d5a75d284824af736df51933be522de9eed0f';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '1' WHERE address = '0xFFbF4892822e0d552CFF317F65e1eE7b5D3d9aE6';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '1' WHERE address = '0x806e16ec797c69afa8590a55723ce4cc1b54050e';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0x0bca8ebcb26502b013493bf8fe53aa2b1ed401c1';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '1' WHERE address = '0x6cbAFEE1FaB76cA5B5e144c43B3B50d42b7C8c8f';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0x98a84eff6e008c5ed0289655ccdca899bcb6b99f';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0xc319eea1e792577c319723b5e60a15da3857e7da';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '1' WHERE address = '0x4EAeD76C3A388f4a841E9c765560BBe7B3E4B3A0';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0x7b7473a76d6ae86ce19f7352a1e89f6c9dc39020';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0xc1879bf24917ebE531FbAA20b0D05Da027B592ce';
            UPDATE ${POOLS_TABLE_NAME} SET cauldron_ver = '2' WHERE address = '0x05500e2ee779329698df35760bedcaac046e7c27';
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            ALTER TABLE "${POOLS_TABLE_NAME}" DROP "cauldron_ver";
            DROP TYPE cauldron_ver_enum;
        `);
    }
}
