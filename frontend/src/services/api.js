import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_URL,
});

export const getProfile = () => api.get('/profile');
export const getEducation = () => api.get('/education');
export const getExperience = () => api.get('/experience');
export const getProjects = () => api.get('/projects');
export const getSkills = () => api.get('/skills');

export default api;
