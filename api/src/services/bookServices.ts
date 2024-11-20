import { BookRepository } from '../repositories/bookRepository';
import { isValidPrice, isValidTitle } from '../helpers/validationHelper';
import { Book } from '../models/bookModel';

export class BookServices {
    private bookRepository: BookRepository;

    constructor() {
        this.bookRepository = new BookRepository();
    }

    async getAllBooks(): Promise<Book[]> {
        return this.bookRepository.getAllBooks();
    }

    async addBook(title: string, author: string, price: number): Promise<Book> {
        if (!isValidTitle(title)) {
            throw new Error('O título deve ter pelo menos 3 caracteres.');
        }

        if (!isValidPrice(price)) {
            throw new Error('Preço deve ser maior que zero.');
        }

        const newBook = await this.bookRepository.addBook(title, author, price);
        return newBook;
    }

    async getBookById(id: number): Promise<Book | null> {
        const book = await this.bookRepository.getBookById(id);
        if (!book) {
            throw new Error('Livro não encontrado');
        }
        return book;
    }

    async updateBook(id: number, updatedData: { title?: string; author?: string; price?: number }): Promise<Book> {
        // Verifica se o livro existe
        const book = await this.bookRepository.getBookById(id);
        if (!book) {
            throw new Error('Livro não encontrado');
        }

        // Valida o título, caso tenha sido atualizado
        if (updatedData.title && !isValidTitle(updatedData.title)) {
            throw new Error('O título deve ter pelo menos 3 caracteres.');
        }

        // Valida o preço, caso tenha sido atualizado
        if (updatedData.price && !isValidPrice(updatedData.price)) {
            throw new Error('Preço deve ser maior que zero.');
        }

        // Atualiza os campos do livro
        const updatedBook = await this.bookRepository.updateBook(
            id, 
            updatedData.title || book.title, // Mantém o título atual se não for fornecido
            updatedData.author || book.author, // Mantém o autor atual se não for fornecido
            updatedData.price || book.price // Mantém o preço atual se não for fornecido
        );

        return updatedBook;
    }
    
    async deleteBook(id: number): Promise<{ status: string }> {
        const book = await this.bookRepository.getBookById(id);
        if (!book) {
            throw new Error('Livro não encontrado');
        }

        const deleted = await this.bookRepository.deleteBook(id);
        if (!deleted) {
            throw new Error('Erro ao deletar livro');
        }

        return { status: 'Deleted' };
    }
}
