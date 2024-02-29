import { hash } from "bcryptjs";
import { CreateUserDTO } from "../../domain/user.dtos";
import { UserModel } from "../../domain/user.model";
import { UserRepository, userRepositoryImpl } from "../../infra/user.repository";

export class CreateUserService {
    constructor(private readonly userRepository: UserRepository) {

    }

    async execute(data: CreateUserDTO): Promise<Omit<UserModel, "password">> {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error('User already exists');
        }

        const password = await hash(data.password, 8);
        const user = await this.userRepository.create({ ...data, password });

        return user;
    }
}

export const createUserServiceImpl = new CreateUserService(userRepositoryImpl);