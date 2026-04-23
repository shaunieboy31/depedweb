import prisma from "@/lib/prisma";

export type SchoolData = {
  name: string;
  location: string;
  category: string;
  type: string;
  cluster?: string | null;
  contact?: string | null;
  logo?: string | null;
  banner?: string | null;
};

export class SchoolService {
  static async getAll() {
    return await prisma.school.findMany({
      orderBy: { name: "asc" },
    });
  }

  static async getById(id: number) {
    return await prisma.school.findUnique({
      where: { id },
    });
  }

  static async create(data: SchoolData) {
    return await prisma.school.create({
      data,
    });
  }

  static async update(id: number, data: Partial<SchoolData>) {
    return await prisma.school.update({
      where: { id },
      data,
    });
  }

  static async delete(id: number) {
    return await prisma.school.delete({
      where: { id },
    });
  }
}
