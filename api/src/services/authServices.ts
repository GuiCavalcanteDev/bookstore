import { UserRepository } from '../repositories/userRepository';
import { hashPassword, comparePassword } from '../helpers/hashHelper';
import { createSession } from '../helpers/sessionHelper';
import { generateToken } from '../helpers/jwtHelper';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async registerUser(name: string, email: string, password: string) {
    const passwordHash = await hashPassword(password);

    const user = await this.userRepository.addUser(name, email, passwordHash);

    const token = generateToken(user.id);
    return {
      username: user.name,
      email: user.email,
      token: token,
      status: 201
    };
  }

  async loginUser(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) throw new Error('Usuário não encontrado');

    const isPasswordValid = await comparePassword(password, user.passwordhash);
    if (!isPasswordValid) throw new Error('Senha incorreta');

    const token = generateToken(user.id);

    createSession(user.id);
    return {
      username: user.name,
      email: user.email,
      token: token,
      status: 200
    };
  }

  async getAllUsers() {
    const users = await this.userRepository.getAllUsers();
    return users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      status: 200
    }));
  }

  async getUserById(id: number) {
    const user = await this.userRepository.getUserById(id);
    if (!user) throw new Error('Usuário não encontrado');

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      status: 200
    };
  }

  async updateUser(id: number, updatedData: { name?: string; email?: string; password?: string }) {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const updatedUser = {
      ...user,
      name: updatedData.name || user.name,
      email: updatedData.email || user.email,
      passwordhash: updatedData.password
        ? hashPassword(updatedData.password)
        : user.passwordhash,
    };

    await this.userRepository.updateUser(id, updatedUser.name, updatedUser.email, updatedUser.passwordhash);

    return {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      status: 'Updated',
    };
  }

  async deleteUser(id: number): Promise<{ status: string }> {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const deleted = await this.userRepository.deleteUser(id);

    if (!deleted) {
      throw new Error('Erro ao deletar usuário');
    }

    return { status: 'Deleted' };
  }
}
