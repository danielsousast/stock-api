import { Request, Response } from "express";
import { createCategoryService } from "../services/create-category.service";

class CreateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const category = createCategoryService.execute(request.body as any);
        return response.status(200).json(category);
    }
}

export const createCategoryController = new CreateCategoryController();