import axios from "axios";

// Use your Firebase Realtime Database URL
const BASE_URL = "https://fullapplication-27e85-default-rtdb.asia-southeast1.firebasedatabase.app/todos";

/**
 * Get all todos for a specific user
 * @param {string} userId
 * @returns Promise<Array>
 */
export const getTodos = async (userId) => {
  try {
    const res = await axios.get(`${BASE_URL}.json?orderBy="userId"&equalTo="${userId}"`);
    if (!res.data) return [];
    // Convert Firebase object to array of todos
    return Object.entries(res.data).map(([id, todo]) => ({ id, ...todo }));
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

/**
 * Add a new todo
 * @param {object} todo {title, completed, userId}
 * @returns Promise<object>
 */
export const addTodo = async (todo) => {
  try {
    const res = await axios.post(`${BASE_URL}.json`, todo);
    return { id: res.data.name, ...todo }; // Firebase returns name as the new ID
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

/**
 * Update a todo by ID
 * @param {string} id
 * @param {object} updatedData {title?, completed?}
 * @returns Promise<object>
 */
export const updateTodo = async (id, updatedData) => {
  try {
    await axios.patch(`${BASE_URL}/${id}.json`, updatedData);
    return { id, ...updatedData };
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

/**
 * Delete a todo by ID
 * @param {string} id
 * @returns Promise<void>
 */
export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}.json`);
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
