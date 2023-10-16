import { Module } from '@nestjs/common';
import { MercadittoService } from './mercaditto.service';
import { MercadittoController } from './mercaditto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mercaditto } from './entities/mercaditto.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Mercaditto])],
  controllers: [MercadittoController],
  providers: [MercadittoService],
})
export class MercadittoModule {}
