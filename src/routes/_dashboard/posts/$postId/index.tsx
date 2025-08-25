import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboard/posts/$postId/')({
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
});

function RouteComponent() {
  const { postId } = useParams({ from: '/_dashboard/posts/$postId' });

  return <div>Hello {postId}!</div>;
}
