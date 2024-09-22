import axios from 'axios';

export async function logIn(email: string, password: string) {
    return (await axios.post('http://localhost:4001/api/login', { email, password })).data;
}

export async function signUp(name: string, email: string, password: string, confirmPassword: string) {
    return (await axios.post('http://localhost:4001/api/signup', { name, email, password, confirmPassword })).data;
}

export async function getUser(id: string) {
    return (await axios.get(`http://localhost:4001/api/user/${id}`).then(res => res.data)).data;
}