import { UserModel } from "../../domain";
import { userRepositoryImpl } from "../../infra/user.repository";

class DetailUserService {
    async execute(user_id: string): Promise<UserModel> {
        const user = await userRepositoryImpl.findById(user_id)

        if (!user) {
            throw new Error("User not found")
        }

        return user
    }
}

export const detailUserService = new DetailUserService()
