import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { todoColumns } from '@/components/tables/todo/columns';
import { TodoTable } from '@/components/tables/todo/table';
import { fetchTodosOptions } from '@/queries/todo/options';

export const Route = createFileRoute('/_dashboard/')({
  component: Home,
});

function Home() {
  const { data } = useQuery(fetchTodosOptions());

  return (
    <div className="p-2 size-full">
      <TodoTable columns={todoColumns} data={data ? data : []} />
    </div>
  );
}
