import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Res } from '@nestjs/common';
import { FieldsService } from './fields.service';
import {NdviService} from './ndvi.service'
import { UpdateFieldDto } from './dto/update-field.dto';
import * as express from 'express';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Fields')
@Controller('fields')
export class FieldsController {
  constructor(private readonly fieldsService: FieldsService,
     private readonly ndviService: NdviService,
  ) {}
  

  @Post()
    @ApiOperation({ summary: 'Create a new field with coordinates' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        points: { 
          type: 'array', 
          items: { type: 'array', items: { type: 'number' } } 
        }
      }
    }
  })
  @ApiResponse({ status: 201, description: 'Field created successfully', content: { 'image/tiff': {} } })
  async  create(@Body() body: {name: string; points:number[][]}, @Res() res: express.Response) {
   const coordinates = [...body.points]
   if(
    coordinates[0][0] !== coordinates[coordinates.length-1][0] ||
    coordinates[0][1] !== coordinates[coordinates.length-1][1]
   ) {
    coordinates.push(coordinates[0])
   }
   const boundaryGeosJon = {
    type: 'Polygon',
    coordinates: [coordinates]
   }
   const field = await this.fieldsService.create({
    name: body.name,
    boundary: boundaryGeosJon
   })
    const ndviBuffer = await this.ndviService.getNdvi(field.boundary)
     res.set({
      'Content-Type': 'image/tiff',
      'X-Field-Id': field.id.toString(), // Dala ID-sini headerda yuboramiz
      'Content-Disposition': `attachment; filename="field_${field.id}.tif"`,
    });
   
    return res.send(ndviBuffer);
  }

  @Get()
  findAll() {
    return this.fieldsService.findAll();
  }

  @Get(':id/ndvi')
    @ApiOperation({ summary: 'Get NDVI data for a field' })
  @ApiResponse({ status: 200, description: 'NDVI data returned' })
  async getFieldndvi(@Param('id') id:number, @Res() res: express.Response){
    const field = await this.fieldsService.findOne(id)
    if(!field) throw new NotFoundException('field not found')

      const ndviBuffer = await this.ndviService.getNdvi(field.boundary)
    res.set({
      'Content-Type': 'image/tiff',
      'Content-Disposition': 'attachment; filename="ndvi_field.tif"',
    });

    return res.send(ndviBuffer);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFieldDto: UpdateFieldDto) {
    return this.fieldsService.update(+id, updateFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldsService.remove(+id);
  }
}
