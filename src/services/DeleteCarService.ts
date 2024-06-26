import { PrismaClient } from "@prisma/client";

class DeleteCarService {

    async delete(plate: string) {

        const carPrisma = new PrismaClient()

        const car = await carPrisma.car.findFirst({
            where: {
                plate: plate
            }
        })

        await carPrisma.car.delete({
            where: {
                plate: car?.plate
            }
        })

        return { message: "Carro deletado com sucesso!" }
    }

}

export { DeleteCarService }