import { Router } from 'express';
import { authenticateJWT } from '../services/JwtService';
import { 
  register, 
  login, 
  getAllUsers, 
  getUserById, 
  updateUser, 
  deleteUser } from '../controllers/authController'; 

const router = Router();

// Rotas de autenticação
router.post('/register', register);
router.post('/login', login);
router.get('/users', authenticateJWT, getAllUsers);
router.get('/users/:id', authenticateJWT, getUserById);
router.put('/users/:id', authenticateJWT, updateUser);
router.delete('/users/:id', authenticateJWT, deleteUser);

export default router;
