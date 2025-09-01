import type * as z from 'zod';
import fetchAndValidate from '@/lib/fetcher';
import { CreatePostSchema, PostSchema } from './type';

export const createPost = async (post: z.infer<typeof CreatePostSchema>) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  };

  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    options,
  );
  const data = await res.json();
  return CreatePostSchema.parse(data);
};

export const getPosts = async (): Promise<z.infer<typeof PostSchema>[]> => {
  const posts = await fetchAndValidate(
    'https://jsonplaceholder.typicode.com/posts',
    PostSchema.array(),
  );
  return posts;
};

export const getPost = async (
  id: string,
): Promise<z.infer<typeof PostSchema>> => {
  const post = await fetchAndValidate(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    PostSchema,
  );
  return post;
};
