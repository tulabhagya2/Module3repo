import { useState } from "react";

const UpdateTodoModal = ({ todo, onClose, onSave }) => {
    const [title, setTitle] = useState(todo.title);

    const handleSave = () => {
        onSave(todo.id, { title });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded w-96">
                <h2 className="font-bold mb-2">Update Todo</h2>
                <input value={title} onChange={e => setTitle(e.target.value)} className="border p-2 w-full mb-4" />
                <div className="flex justify-end">
                    <button onClick={onClose} className="bg-gray-400 px-3 py-1 rounded mr-2">Cancel</button>
                    <button onClick={handleSave} className="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateTodoModal;
