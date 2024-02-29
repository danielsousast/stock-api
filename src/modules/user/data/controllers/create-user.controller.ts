import { CreateUserDTO, UserModel } from "../../domain";
import { createUserServiceImpl } from "../services";

class CreateUserController {
  async handle(data: Request): Promise<Omit<UserModel, "password">> {
    console.log('CreateUserController -> handle -> data', data);
    return await createUserServiceImpl.execute(data.body as unknown as CreateUserDTO);
  }
}

export const createUserController = new CreateUserController();