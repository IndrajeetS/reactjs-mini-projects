
import { useState } from 'react'
import { useTodo } from '../contexts/TodoContext.js'

function TodoForm() {
    const [todo, setTodo] = useState('')

    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({ todo, completed: false })
        setTodo(e.target.value)

    }


    return (
        <form
            onSubmit={add}
            className="flex items-center justify-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md mx-auto"
        >
            <input
                type="text"
                placeholder="Add Todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="flex-1 px-4 py-2 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-5 py-2 rounded-lg shadow-lg transition duration-300"
                onClick={add}
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm