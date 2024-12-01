import { Router } from 'express';
import { getAllBooks, addBook, getBookById, updateBook, deleteBook } from '../controllers/bookController';
import { authenticateJWT } from '../services/JwtService';
const router = Router();

router.get('/books', getAllBooks);
router.post('/books',authenticateJWT, addBook);
router.get('/books/:id', getBookById);
router.put('/books/:id',authenticateJWT, updateBook);
router.delete('/books/:id', authenticateJWT, deleteBook);

export default router;
