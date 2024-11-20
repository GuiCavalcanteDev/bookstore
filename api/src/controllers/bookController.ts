import { Request, Response } from 'express';
import { BookRepository } from '../repositories/bookRepository';

const bookRepository = new BookRepository();

// Buscar todos os livros
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookRepository.getAllBooks();
    res.status(200).json(books);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao buscar os livros.', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro desconhecido ao buscar os livros.' });
    }
  }
};

// Buscar um livro por ID
export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const book = await bookRepository.getBookById(Number(id));

    if (!book) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }

    res.status(200).json(book);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao buscar o livro.', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro desconhecido ao buscar o livro.' });
    }
  }
};

// Adicionar um novo livro
export const addBook = async (req: Request, res: Response) => {
  const { title, author, price } = req.body;

  try {
    const newBook = await bookRepository.addBook(title, author, price);
    res.status(201).json(newBook);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao adicionar o livro.', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro desconhecido ao adicionar o livro.' });
    }
  }
};



// Atualizar um livro
export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author, price } = req.body;

  try {
    const updatedBook = await bookRepository.updateBook(Number(id), title, author, price);

    if (!updatedBook) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }

    res.status(200).json(updatedBook);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao atualizar o livro.', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro desconhecido ao atualizar o livro.' });
    }
  }
};

// Deletar um livro
export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const isDeleted = await bookRepository.deleteBook(Number(id));

    if (!isDeleted) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }

    res.status(200).json({ message: 'Livro deletado com sucesso.' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao deletar o livro.', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro desconhecido ao deletar o livro.' });
    }
  }
};
