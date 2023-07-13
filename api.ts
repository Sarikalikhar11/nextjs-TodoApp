const baseUrl = 'http://localhost:3002';
import { ITask } from './models/tasks';

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' });
  const todos: any = await res.json();
  return todos;
};

export const addTodo = async (todo: ITask): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const newTodo: any = await res.json();
  return newTodo;
};

export const editTodo = async (todo: ITask): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo: any = await res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  const res = await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
  });
};
