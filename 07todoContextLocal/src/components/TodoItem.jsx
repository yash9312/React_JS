import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);

    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        if (!todoMsg) return;
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    return (
        <div
            className={`flex items-center gap-3 p-3 rounded-2xl shadow-sm border transition-all duration-300
                ${todo.completed
                    ? "bg-green-50 border-green-200"
                    : "bg-white border-gray-200 hover:shadow-md"}
            `}
        >
            {/* Checkbox */}
            <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer accent-indigo-500 transition-transform duration-200 hover:scale-110"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />

            {/* Todo Text */}
            <input
                type="text"
                className={`flex-1 text-base bg-transparent outline-none rounded-lg transition-all duration-200
                    ${isTodoEditable
                        ? "border border-gray-300 px-2 py-1 focus:ring-2 focus:ring-indigo-400"
                        : "border-none"}
                    ${todo.completed ? "line-through text-gray-400" : "text-gray-800 font-medium"}
                `}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit / Save */}
            <button
                className="w-9 h-9 flex justify-center items-center rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 shadow transition-transform duration-200 hover:scale-110 disabled:opacity-40"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>

            {/* Delete */}
            <button
                className="w-9 h-9 flex justify-center items-center rounded-lg bg-red-50 text-red-600 hover:bg-red-100 shadow transition-transform duration-200 hover:scale-110"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
