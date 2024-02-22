import { CreateUserDTO } from "../../domain/user.dtos";
import { UserModel } from "../../domain/user.model";
import { CreateUserService } from "../services/create-user";

export class CreateUserController {
  constructor(private readonly userService: CreateUserService) { }


  async handle(data: CreateUserDTO): Promise<Omit<UserModel, "password">> {
    return this.userService.execute(data);
  }
}