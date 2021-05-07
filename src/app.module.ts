import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from 'config/databaseConfiguration';
import { getConnectionOptions } from 'typeorm';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    HomeModule,
    UserModule,
    ConfigModule.forRoot({ load: [databaseConfig], isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseConfig().host,
      port: databaseConfig().port,
      username: databaseConfig().username,
      password: databaseConfig().password,
      database: databaseConfig().database,
      entities: databaseConfig().entities,
    }),
  ],
})
export class AppModule {}
