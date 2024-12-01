import jwt from 'jsonwebtoken';

//Variavel deveria estar no .env, porem para que seja possivel ver, colocamos direto aqui
const SECRET_KEY = process.env.JWT_SECRET || 'bookstore';

export const generateToken = (id: number) => {
    return jwt.sign({ id }, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, SECRET_KEY);
};