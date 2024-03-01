import { Request, Response } from "express";
import { CreateUserDTO } from "../../domain";
import { createUserServiceImpl } from "../services";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const user = await createUserServiceImpl.execute(request.body as unknown as CreateUserDTO);
    return response.status(200).json(user);
  }
}

export const createUserController = new CreateUserController();