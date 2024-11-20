import { Pool } from 'pg';
import pool from '../config/database';
import { Book } from '../models/bookModel';

export class BookRepository {
  private pool: Pool = pool;

  // Busca todos os livros
  async getAllBooks(): Promise<Book[]> {
    const { rows } = await this.pool.query('SELECT id, title, author, price FROM books');
    return rows;
  }

   // Busca livro por ID
  async getBookById(id: number): Promise<Book | null> {
    const { rows } = await this.pool.query('SELECT id, title, author, price FROM books WHERE id = $1', [id]);
    return rows[0] || null;
  }

  // Adiciona um novo livro
  async addBook(title: string, author: string, price: number): Promise<Book> {
    const query = 'INSERT INTO books (title, author, price) VALUES ($1, $2, $3) RETURNING id, title, author, price';
    const { rows } = await this.pool.query(query, [title, author, price]);
    return rows[0];
  }

  // Atualiza um livro
  async updateBook(id: number, title: string, author: string, price: number): Promise<Book> {
    const query = `
      UPDATE books
      SET title = $1, author = $2, price = $3
      WHERE id = $4
      RETURNING id, title, author, price;
    `;

    const { rows } = await this.pool.query(query, [title, author, price, id]);

    if (rows.length === 0) {
      throw new Error('Livro não encontrado');
    }

    return rows[0];
  }


  // Deleta um livro
  async deleteBook(id: number): Promise<boolean> {
    const query = 'DELETE FROM books WHERE id = $1 RETURNING id';
    const { rows } = await this.pool.query(query, [id]);
    return rows.length > 0;
  }
}
