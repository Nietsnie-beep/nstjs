import { Module } from '@nestjs/common';
import { MercadittoModule } from './mercaditto/mercaditto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MercadittoModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host:'localhost',
    port: 3307,
    username: 'niets_dev',
    password: 'root',
    database:'db_crud',
    autoLoadEntities:true,
    synchronize: true
  }),
  UsersModule,
  AuthModule,
],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
