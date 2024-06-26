import { PrismaClient } from "@prisma/client";

class DeleteDriverService {

    async remove(id: string) {
        const prismaDriver = new PrismaClient()
        
        const driver = await prismaDriver.driver.findFirst({
            where: {
                id:id
            }
        })
        
        await prismaDriver.driver.delete({
            where: {
                id: driver?.id
            }
        })

        return { message: "Motorista deletado com sucesso!" }


    }

}

export { DeleteDriverService }