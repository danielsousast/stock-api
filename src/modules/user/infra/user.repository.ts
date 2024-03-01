import { Prisma, PrismaClient } from "@prisma/client";
import prismaClient from "../../../config/prisma";
import { UserModel } from "../domain/user.model";

export class UserRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = prismaClient;
    }

    async create(data: Prisma.UserCreateInput): Promise<Omit<UserModel, "password">> {
        return this.prisma.user.create({ data, select: { id: true, name: true, email: true } });
    }

    async findById(id: string): Promise<UserModel | null> {
        return this.prisma.user.findUnique({
            where: { id }, select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true
            }
        });
    }

    async findByEmail(email: string): Promise<UserModel | null> {
        return this.prisma.user.findUnique({
            where: { email }, select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true
            }
        });
    }

    async removeById(id: string): Promise<void> {
        await this.prisma.user.delete({ where: { id } });
    }

    async listAll(): Promise<UserModel[]> {
        return this.prisma.user.findMany({ select: { id: true, name: true, email: true, created_at: true, updated_at: true } });
    }
}

export const userRepositoryImpl = new UserRepository();