import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../helpers/jwtHelper';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => { 
  const token = req.headers.authorization?.split(' ')[1]; // "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: 'Token de autenticação não fornecido' });
  }

  try {
    const decoded = verifyToken(token) as { userId: number };
    req.body.userId = decoded.userId; // Adiciona userId ao request
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido ou expirado' });
  }
};
