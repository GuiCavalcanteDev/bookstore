import { Router } from 'express';
import { getAllBooks, addBook, getBookById, updateBook, deleteBook } from '../controllers/bookController';

const router = Router();

router.get('/books', getAllBooks);
router.post('/books', addBook);
router.get('/books/:id', getBookById);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
