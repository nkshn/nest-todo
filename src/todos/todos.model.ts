import { Model, Column, DataType, Table } from "sequelize-typescript";

interface TodoCreationAttrs { // fields for creating new todo
  taskName: string;
}

@Table({
  tableName: 'Todos'
})
export class Todo extends Model<Todo, TodoCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  taskName: string;
  
  @Column({ type: DataType.STRING, defaultValue: false })
  isDone: string;
  
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  createdAt: Date;
  
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  updatedAt: Date;
}