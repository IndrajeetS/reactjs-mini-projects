import { useState } from 'react';
import { useTodo } from '../contexts/TodoContext.js';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);

    const { updateTodo, toggleTodo, deleteTodo } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleTodo(todo.id);
    };

    const editTodoInput = () => {
        setIsTodoEditable(true);
    };

    return (
        <div
            className={`flex items-center gap-4 p-4 mb-4 rounded-xl shadow-lg border-2 transition-all 
        ${todo.completed
                    ? 'bg-green-100 border-green-300'
                    : 'bg-yellow-100 border-yellow-300'
                }`}
        >
            {/* Checkbox */}
            <input
                type="checkbox"
                className="w-5 h-5 accent-pink-500 cursor-pointer scale-110"
                checked={todo.completed}
                onChange={toggleCompleted}
                title="Mark complete"
            />

            {/* Todo Text Input */}
            <input
                type="text"
                className={`flex-1 text-lg px-3 py-1 rounded-lg font-semibold tracking-wide transition-all 
          ${isTodoEditable ? 'bg-white border border-pink-400 shadow-sm' : 'bg-transparent border-transparent'}
          ${todo.completed ? 'line-through text-green-600' : 'text-purple-800'}
        `}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit / Save Button */}
            <button
                onClick={isTodoEditable ? editTodo : editTodoInput}
                disabled={todo.completed}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-xl transition-transform hover:scale-110 
          ${todo.completed ? 'opacity-30 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-600 text-white'}
        `}
                title={isTodoEditable ? 'Save' : 'Edit'}
            >
                {isTodoEditable ? '💾' : '🖊️'}
            </button>

            {/* Delete Button */}
            <button
                onClick={() => deleteTodo(todo.id)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white text-xl transition-transform hover:scale-110"
                title="Delete"
            >
                🗑️
            </button>
        </div>
    );
}

export default TodoItem;
