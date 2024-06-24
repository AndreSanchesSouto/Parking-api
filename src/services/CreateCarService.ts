import { PrismaClient } from "@prisma/client"
import { Car } from "../interfaces/Car"

class CreateCarService {

    async build({ plate, name, year , mercosul }: Car) {
        return new PrismaClient().car.create({
            data: { plate, name, year, mercosul }
        })
    }

}

export { CreateCarService }