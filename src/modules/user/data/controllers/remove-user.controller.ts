import { Request, Response } from "express";
import { removeUserService } from "../services/remove-user.service";

class RemoveUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        await removeUserService.execute(request?.query?.user_id as string);
        return response.status(204).send();
    }
}

export const removeUserController = new RemoveUserController();