import { useForm } from "react-hook-form";
import { useTodoStore } from "../../store/todoStore";

interface TodoFormInputs {
  todoText: string;
  category: string;
}

export const TodoForm = () => {
  const { register, handleSubmit, reset } = useForm<TodoFormInputs>();
  const addTodo = useTodoStore(state => state.addTodo);

  const onSubmit = (data: TodoFormInputs) => {
    addTodo(data.todoText, data.category);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-2 mb-4">
      <input
        {...register('todoText', { required: true })}
        placeholder="Add a new todo"
        className="border rounded w-full py-2 px-3 text-gray-700"
      />
      <select
        {...register('category', { required: true })}
        className="border rounded w-full py-2 px-3 text-gray-700">
        <option value="-1" selected>Choose</option>
        <option value="Test">Test</option>
        <option value="Business">Business</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add
      </button>
    </form >
  );
}