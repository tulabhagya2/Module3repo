const Sidebar = ({ todos, selectTodo, selectedTodo }) => {
    return (
        <div className="w-64 bg-gray-100 p-4 overflow-y-auto">
            <h2 className="font-bold mb-4">Todos</h2>
            {todos.map(todo => (
                <div key={todo.id} className={`p-2 cursor-pointer ${selectedTodo?.id === todo.id ? 'bg-blue-200' : ''}`} onClick={() => selectTodo(todo)}>
                    {todo.title}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
