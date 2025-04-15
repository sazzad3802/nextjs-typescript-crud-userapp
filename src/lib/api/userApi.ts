// lib/api/userApi.ts
import axios from "axios";
import { User, UserFormValues } from "@/types/user";

const API_BASE_URL = "http://localhost:3000"; // NestJS backend

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const createUser = async (user: UserFormValues): Promise<User> => {
  const response = await axios.post(`${API_BASE_URL}/users`, user);
  return response.data;
};

export const updateUser = async (id: number, user: UserFormValues): Promise<User> => {
  const response = await axios.put(`${API_BASE_URL}/users/${id}`, user);
  return response.data;
};