import { useTodoStore } from "../../store/todoStore";

export const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useTodoStore();

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between">
          <div
            className={`flex-1 cursor-pointer ${todo.completed ? 'line-through' : ''}`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text} - {todo.category}
          </div>
          <button
            onClick={() => removeTodo(todo.id)}
            className="bg-red-500 text-white py-1 px-2 rounded"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}