import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getUsers(){
  try{
    const response = await axios.get (`${API_BASE_URL}/users`);
    return response.data;
  } catch (error){
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function addUser(newUser){
  try{
    const response = await axios.post (`${API_BASE_URL}/users`, newUser);
    return response.data;
  } catch (error){
    console.error('Error fetching users:', error);
    throw error;
  }
}


export async function deleteUser(userId) {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}