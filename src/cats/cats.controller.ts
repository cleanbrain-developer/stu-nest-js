import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { RolesGuard } from 'src/roles.guard';
import { ZodValidationPipe } from 'src/zod.validation.pipe';
import { CatsService } from './cats.service';
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { LoggingInterceptor } from './logging.interceptor';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createCatSchema))
  create(@Body() createCatDto: CreateCatDto) {
    // return this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
