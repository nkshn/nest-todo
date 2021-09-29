import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Todo } from './todos.model';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [
    SequelizeModule.forFeature([Todo])
  ]
})
export class TodosModule {}
