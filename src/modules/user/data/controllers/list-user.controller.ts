import { Request, Response } from "express";
import { listUsersService } from "../services/list-users.service";

class ListUserController {
    async handle(_request: Request, response: Response): Promise<Response> {
        try {
            const users = await listUsersService.execute();
            return response.status(200).json(users);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.',
            });
        }
    }
}

export const listUserController = new ListUserController();