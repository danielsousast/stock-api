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
        return this.prisma.user.findUnique({ where: { id } });
    }

    async findByEmail(email: string): Promise<UserModel | null> {
        return this.prisma.user.findUnique({ where: { email } });
    }
}

export const userRepositoryImpl = new UserRepository();