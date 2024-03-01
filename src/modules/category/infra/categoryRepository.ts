import prismaClient from "../../../config/prisma";
import { CreateCategoryDTO } from "../data/domain/category.dtos";
import { CategoryModel } from "../data/domain/category.model";

class CategoryRepository {
    async create(category: CreateCategoryDTO): Promise<CategoryModel> {
        return await prismaClient.category.create({ data: category });
    }
    async findByName(name: string): Promise<CategoryModel> {
        return await prismaClient.category.findFirst({ where: { name } });
    }
    async list(): Promise<CategoryModel[]> {
        return await prismaClient.category.findMany();
    }
    async remove(id: string): Promise<void> {
        await prismaClient.category.delete({ where: { id } });
    }
}

export const categoryRepositoryImpl = new CategoryRepository();