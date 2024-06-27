import { PrismaClient } from "@prisma/client";
import { Valet } from "@prisma/client";
class CreateValetService {
    async build({ fullname, cpf, email, cellphone, password }: Valet) {
        return new PrismaClient().valet.create({
            data: {
                fullname, cpf, email, cellphone, password
            }
        })
    }
}

export { CreateValetService }