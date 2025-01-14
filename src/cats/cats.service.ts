import { Injectable } from '@nestjs/common';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  // create(createCatDto: CreateCatDto) {
  //   return 'This action adds a new cat';
  // }

  create(cat: Cat) {
    this.cats.push(cat);
  }

  // findAll() {
  //   return `This action returns all cats`;
  // }

  async findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
