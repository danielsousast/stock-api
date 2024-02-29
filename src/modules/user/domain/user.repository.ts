import { CreateUserDTO } from "./user.dtos";
import { UserModel } from "./user.model";

export interface IUserRepository {
    create(data: CreateUserDTO): Promise<UserModel>;
    findByEmail(email: string): Promise<UserModel>;
}