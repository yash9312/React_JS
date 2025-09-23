import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (todo) {
            addTodo({
                id: Date.now(),
                todo,
                completed: false
            });
            setTodo("");
        }
    };

    return (
        <form
            onSubmit={add}
            className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-md border border-gray-200 transition-all duration-300"
        >
            <input
                type="text"
                placeholder="✍️ Write your task..."
                className="flex-1 px-4 py-2 text-base rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 outline-none text-gray-800 bg-gray-50 placeholder-gray-400"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
                ➕ Add
            </button>
        </form>
    );
}

export default TodoForm;
