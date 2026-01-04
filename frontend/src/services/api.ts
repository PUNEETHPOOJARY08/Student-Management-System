import axios from 'axios';
import { Student } from '../types/Student';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const studentService = {
  getAllStudents: async (): Promise<Student[]> => {
    const response = await api.get<Student[]>('/students');
    return response.data;
  },

  getStudentById: async (id: number): Promise<Student> => {
    const response = await api.get<Student>(`/students/${id}`);
    return response.data;
  },

  createStudent: async (student: Omit<Student, 'id'>): Promise<Student> => {
    const response = await api.post<Student>('/students', student);
    return response.data;
  },

  updateStudent: async (id: number, student: Omit<Student, 'id'>): Promise<Student> => {
    const response = await api.put<Student>(`/students/${id}`, student);
    return response.data;
  },

  deleteStudent: async (id: number): Promise<void> => {
    await api.delete(`/students/${id}`);
  },
};

