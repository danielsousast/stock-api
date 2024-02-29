import { UserModel } from "./user.model";

export interface CreateUserDTO {
    name: string;
    email: string;
    password: string;
}

export interface AuthResponseDTO extends Omit<UserModel, "password"> {
    token: string;
}

export interface AuthDTO {
    email: string;
    password: string;
}