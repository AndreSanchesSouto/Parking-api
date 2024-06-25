import { PrismaClient } from "@prisma/client"

class ListDriversService {
    async consulte() {
        const prismaDriver = await new PrismaClient().driver.findMany()
        return prismaDriver
    }
}

export { ListDriversService }