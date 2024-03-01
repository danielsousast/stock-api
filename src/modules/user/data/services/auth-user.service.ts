import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AuthDTO, AuthResponseDTO } from '../../domain/user.dtos';
import { userRepositoryImpl } from "../../infra/user.repository";

class AuthUserService {
    async execute({ email, password }: AuthDTO): Promise<AuthResponseDTO> {
        const user = await userRepositoryImpl.findByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        if (!compare(password, user.password)) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({
            name: user.name,
            email: user.email
        }, process.env.JWT_SECRET as string, {
            subject: user.id,
            expiresIn: '10d'
        })

        const { password: _, ...userWithoutPassword } = user;

        return {
            ...userWithoutPassword,
            token
        };
    }
}

export const authUserServiceImpl = new AuthUserService();