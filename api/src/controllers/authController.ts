import { Request, Response } from 'express';
import { AuthService } from '../services/authServices';

const authService = new AuthService();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await authService.getAllUsers();
    res.status(200).json(users);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id); // Converte para número
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido. Deve ser um número.' });
  }

  try {
    const user = await authService.getUserById(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await authService.registerUser(name, email, password);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await authService.loginUser(email, password);

    res.status(200).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message, status: 400 });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id); // Converte o ID para número
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido. Deve ser um número.' });
  }

  const updatedData = req.body;
  try {
    const updatedUser = await authService.updateUser(id, updatedData);
    res.status(200).json(updatedUser);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};


export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id); // Converte para número
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido. Deve ser um número.' });
  }

  try {
    const response = await authService.deleteUser(id);
    res.status(200).json(response);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
