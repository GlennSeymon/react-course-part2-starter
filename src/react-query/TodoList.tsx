import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <h1>Loading, loading, loading....</h1>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1>Todo</h1>
      <ul className="list-group">
        {todos?.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
