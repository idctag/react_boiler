import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboard/posts/')({
  component: Posts,
});

function Posts() {
  const posts = ['Post 1', 'Post 2', 'Post 3'];
  return (
    <div>
      {posts.map((post) => (
        <div key={post}>
          <Link
            to="/posts/$postId"
            params={{
              postId: post,
            }}
          >
            {post}
          </Link>
        </div>
      ))}
    </div>
  );
}
