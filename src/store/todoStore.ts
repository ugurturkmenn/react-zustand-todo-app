import create from 'zustand';

interface Todo {
  id: number;
  text: string;
  category: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string, category: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (text: string, category: string) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, category, completed: false }]
  })),
  toggleTodo: (id: number) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  removeTodo: (id: number) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  })),
}));