import { PrismaClient } from "@prisma/client"

class ListCarsService {
    async consulte() {
        const prismaCar = await new PrismaClient().car.findMany()
        return prismaCar
    }
}

export { ListCarsService }