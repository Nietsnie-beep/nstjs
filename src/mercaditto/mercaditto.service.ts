import { Inject, Injectable } from '@nestjs/common';
import { CreateMercadittoDto } from './dto/create-mercaditto.dto';
import { UpdateMercadittoDto } from './dto/update-mercaditto.dto';
import { Repository } from 'typeorm';
import { Mercaditto } from './entities/mercaditto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MercadittoService {

  constructor(
    @InjectRepository(Mercaditto)
    private readonly mercadittoRepository: Repository<Mercaditto>
  ){}

  async create(createMercadittoDto: CreateMercadittoDto) {
    // const product = this.mercadittoRepository.create(createMercadittoDto);
    return await this.mercadittoRepository.save(createMercadittoDto)  
  }

  async findAll() {
    return await  this.mercadittoRepository.find();
  } 

  async findOne(id: number) {
    return await this.mercadittoRepository.findOneBy({id})  

  }

  async update(id: number, updateMercadittoDto: UpdateMercadittoDto) {
    return await this.mercadittoRepository.update(id, updateMercadittoDto)
  }

  async remove(id: number) {
    //delete Logic
    return await this.mercadittoRepository.softDelete({id});
    
  }
}
