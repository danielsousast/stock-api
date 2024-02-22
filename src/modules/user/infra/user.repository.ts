import { Prisma, PrismaClient } from "@prisma/client";
import { UserModel } from "../domain/user.model";

export class UserRepository implements UserRepository {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
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