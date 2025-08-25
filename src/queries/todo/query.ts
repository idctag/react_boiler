import type * as z from 'zod';
import fetchAndValidate from '../../lib/fetcher';
import { TodoSchema } from './type';

export const getTodos = async (): Promise<z.infer<typeof TodoSchema>[]> => {
  const todos = await fetchAndValidate(
    'https://jsonplaceholder.typicode.com/todos',
    TodoSchema.array(),
  );

  return todos;
};
