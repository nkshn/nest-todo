import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodosDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  
  constructor(private todoService: TodosService) {}

  @Post()
  create(@Body() todoDto: CreateTodosDto) {
    return this.todoService.createTodo(todoDto);
  }

  @Get()
  getAll() {
    return this.todoService.getAllTodos();
  }
}