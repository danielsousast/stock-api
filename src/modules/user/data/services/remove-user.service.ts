import { userRepositoryImpl } from "../../infra/user.repository";

class RemoveUserService {
    async execute(userId: string): Promise<void> {
        if (!userId) {
            throw new Error("User id is required");
        }
        await userRepositoryImpl.removeById(userId);
    }
}

export const removeUserService = new RemoveUserService();
