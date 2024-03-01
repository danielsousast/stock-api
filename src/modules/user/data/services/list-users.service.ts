import { UserModel } from "../../domain";
import { userRepositoryImpl } from "../../infra/user.repository";

class ListUsersService {
    async execute(): Promise<UserModel[]> {
        return userRepositoryImpl.listAll();
    }
}

export const listUsersService = new ListUsersService();