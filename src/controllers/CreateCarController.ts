import { CreateCarService } from "../services/CreateCarService"
import { FastifyRequest, FastifyReply } from "fastify"

class CreateCarController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { plate, name, year, mercosul } = request.body as {
            plate: string,
            name: string,
            year: string,
            mercosul: boolean
        }

        const car = await new CreateCarService().build({ plate, name, year, mercosul })

        reply.send(car)
    }

}

export { CreateCarController }