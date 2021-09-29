import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTodosDto } from './dto/create-todo.dto';
import { Todo } from './todos.model';

@Injectable()
export class TodosService {

  constructor(@InjectModel(Todo) private todoRepository: typeof Todo) {}
  
  async createTodo(dto: CreateTodosDto) {
    const todo = await this.todoRepository.create(dto);
    return todo;
  }

  async getAllTodos() {
    const todos = await this.todoRepository.findAll();
    return todos;
  }
}