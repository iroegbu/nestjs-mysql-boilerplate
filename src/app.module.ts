import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [HomeModule, UserModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
