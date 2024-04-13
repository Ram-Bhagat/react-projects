import { useSelector, useDispatch } from 'react-redux';
import { removeTodos } from '../features/todo/TodoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();



    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">Todo List</h2>
            <ul className="divide-y divide-gray-200">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between py-2">
                        <input
                            type="text"
                            className={`flex-1  outline-none px-2 py-2 mr-3  bg-transparent rounded-lg 
                             `}
                            value={todo.text}
                            readOnly
                        />
                        <div>
                            <button
                                onClick={() => dispatch(removeTodos(todo.id))}
                                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 mr-3">
                              ❌
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
