import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { get } from 'http';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return `This will create movie`;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete one movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will update one movie with the id: ${movieId}`;
  }
}
