import { PartialType } from '@nestjs/mapped-types';
import { CreateMercadittoDto } from './create-mercaditto.dto';

export class UpdateMercadittoDto extends PartialType(CreateMercadittoDto) {}
