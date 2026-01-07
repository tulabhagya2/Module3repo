import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import * as todoService from "../services/todo.service";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TodoList from "../components/TodoList";
import UpdateTodoModal from "../components/UpdateTodoModal";
import Footer from "../components/Footer";

const Todos = () => {
    const { user } = useAuth();
    const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const fetchTodos = async () => {
        const data = await todoService.getTodos(user.uid);
        const todosArray = data ? Object.entries(data).map(([id, todo]) => ({ id, ...todo })) : [];
        setTodos(todosArray);
    };

    useEffect(() => { fetchTodos(); }, []);

    const handleAddTodo = async (title) => {
        const newTodo = { title, completed: false, userId: user.uid };
        await todoService.addTodo(newTodo);
        fetchTodos();
    };

    const handleUpdateTodo = async (id, updatedData) => {
        await todoService.updateTodo(id, updatedData);
        fetchTodos();
    };

    const handleDeleteTodo = async (id) => {
        await todoService.deleteTodo(id);
        fetchTodos();
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar todos={todos} selectTodo={setSelectedTodo} selectedTodo={selectedTodo} />
                <TodoList todos={todos} selectTodo={setSelectedTodo} openModal={setModalOpen} deleteTodo={handleDeleteTodo} toggleTodo={handleUpdateTodo}/>
            </div>
            {modalOpen && <UpdateTodoModal todo={selectedTodo} onClose={() => setModalOpen(false)} onSave={handleUpdateTodo}/>}
            <Footer />
        </div>
    );
};

export default Todos;
