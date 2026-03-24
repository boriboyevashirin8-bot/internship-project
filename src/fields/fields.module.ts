import { Module } from '@nestjs/common';
import { FieldsService } from './fields.service';
import { FieldsController } from './fields.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fields } from './entities/field.entity';
import { NdviService } from './ndvi.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fields])],
  controllers: [FieldsController],
  providers: [FieldsService, NdviService],
})
export class FieldsModule {}
