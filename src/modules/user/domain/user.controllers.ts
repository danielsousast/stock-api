import { AuthDTO, AuthResponseDTO, CreateUserDTO } from "./user.dtos";
import { UserModel } from "./user.model";

export interface ICreateUserController {
    handle(data: CreateUserDTO): Promise<Omit<UserModel, "password">>;
}

export interface IAuthController {
    handle(data: AuthDTO): Promise<AuthResponseDTO>;
}

