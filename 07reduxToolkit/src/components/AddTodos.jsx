import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodos } from "../features/todo/TodoSlice";

function AddTodos() {
    const [input, setInput] = useState('');
    
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodos(input));
        setInput('');
    };

    return (
        <div className="max-w-md mx-auto mt-5">
            <form onSubmit={addTodoHandler} className="flex items-center border border-gray-300 p-4 rounded-lg shadow-md">
                <input
                    className="flex-1 mr-2 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    type="text"
                    placeholder="Enter your todo"
                />
                <button
                    type="submit"
                    className="py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddTodos;
