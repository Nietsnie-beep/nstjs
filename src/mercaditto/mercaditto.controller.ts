import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MercadittoService } from './mercaditto.service';
import { CreateMercadittoDto } from './dto/create-mercaditto.dto';
import { UpdateMercadittoDto } from './dto/update-mercaditto.dto';

@Controller('mercaditto')
export class MercadittoController {
  constructor(private readonly mercadittoService: MercadittoService) {}

  @Post()
  create(@Body() createMercadittoDto: CreateMercadittoDto) {
    return this.mercadittoService.create(createMercadittoDto);
  }

  @Get()
  findAll() {
    return this.mercadittoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mercadittoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMercadittoDto: UpdateMercadittoDto) {
    return this.mercadittoService.update(+id, updateMercadittoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mercadittoService.remove(+id);
  }  
}
