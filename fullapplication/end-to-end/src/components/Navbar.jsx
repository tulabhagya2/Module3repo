import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Todos App</h1>
            {user ? <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Sign Out</button> : null}
        </nav>
    );
};

export default Navbar;
