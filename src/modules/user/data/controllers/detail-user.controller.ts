import { Request, Response } from 'express';
import { detailUserService } from '../services/detail-user.service';

class DetailUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request

        try {
            const user = await detailUserService.execute(user_id);
            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export const detailUserController = new DetailUserController();
