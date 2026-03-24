import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fields } from './entities/field.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FieldsService {
  constructor(
    @InjectRepository(Fields) private fieldsRepo: Repository<Fields>
  ){}
  create(data: {name: string; boundary: any}) {
    const field = this.fieldsRepo.create(data)
    return this.fieldsRepo.save(field)
  }

  async findAll() {
    const fields = await this.fieldsRepo.find()
    return fields
  }

  async findOne(id: number) {
    const field = await this.fieldsRepo.findOne({where: {id}})
    if(!field) throw new BadRequestException("Field not found")
      return field
  }

  async update(id: number, updateFieldDto: UpdateFieldDto) {
    const field = await this.fieldsRepo.findOne({where: {id}})
    if(!field) throw new BadRequestException('Field not found')
      const updatedData: any = {...updateFieldDto}
    if(updatedData.boundary){
      updatedData.boundary = () =>{
        const coords = updatedData.boundary.coordinates[0]
        .map(c => `${c[0], c[1]}`)
        .join(', ');
        return `ST_GeomFromText('POLYGON((${coords}))', 4326)`
      }
    }
    await this.fieldsRepo.update(id, updatedData)
    return field
  }

  async remove(id: number) {
      const field = await this.fieldsRepo.findOne({where: {id}})
    if(!field) throw new BadRequestException('Field not found')
      await this.fieldsRepo.delete({id})
    return {message: 'Field deleted successfully'}
  }
}


