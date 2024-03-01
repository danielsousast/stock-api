import { categoryRepositoryImpl } from "../../infra/categoryRepository";
import { CreateCategoryDTO } from "../domain/category.dtos";
import { CategoryModel } from "../domain/category.model";

class CreateCategoryService {

    async execute(category: CreateCategoryDTO): Promise<CategoryModel> {
        return await categoryRepositoryImpl.create(category);
    }
}

export const createCategoryService = new CreateCategoryService();