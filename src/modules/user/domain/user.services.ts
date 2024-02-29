import { AuthDTO, AuthResponseDTO, CreateUserDTO } from "./user.dtos";
import { UserModel } from "./user.model";

export interface IAuthService {
    execute(data: AuthDTO): Promise<AuthResponseDTO>;
}

export interface ICreateUserService {
    execute(data: CreateUserDTO): Promise<Omit<UserModel, "password">>;
}

