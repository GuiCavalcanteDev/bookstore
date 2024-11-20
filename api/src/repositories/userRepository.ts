import { Pool } from 'pg';
import pool from '../config/database';
import { User } from '../models/userModel';

export class UserRepository {
  private pool: Pool = pool;


  async getUserByEmail(email: string): Promise<User | null> {
    const { rows } = await this.pool.query('SELECT id, name, email, passwordHash FROM users WHERE email = $1', [email]);
    return rows[0] || null;
  }

  async getUserById(id: number): Promise<User | null> {
    const { rows } = await this.pool.query('SELECT id, name, email FROM users WHERE id = $1', [id]);
    return rows[0] || null;
  }

  async getAllUsers(): Promise<User[]> {
    const { rows } = await this.pool.query('SELECT id, name, email FROM users');
    return rows;
  }

  async addUser(name: string, email: string, passwordHash: string): Promise<User> {
    const query = 'INSERT INTO users (name, email, passwordHash) VALUES ($1, $2, $3) RETURNING id, name, email';
    const { rows } = await this.pool.query(query, [name, email, passwordHash]);
    return rows[0];
  }

  async updateUser(id: number, name: string, email: string, passwordHash?: string): Promise<void> {
    let query = `
      UPDATE users
      SET name = $1, email = $2
    `;
  
    const queryParams: (string | number)[] = [name, email];
    
    if (passwordHash) {
      query += `, passwordhash = $3`;
      queryParams.push(passwordHash);
    }
  
    query += ` WHERE id = $${queryParams.length + 1}`;
    queryParams.push(id);
    
    await this.pool.query(query, queryParams);
  }

  async deleteUser(id: number): Promise<boolean> {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING id';
    const { rows } = await this.pool.query(query, [id]);
    return rows.length > 0;
  }
}
