import { ListCarsService } from "../services/ListCarsService"
import { FastifyRequest, FastifyReply } from "fastify"

class ListCarsController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCars = await new ListCarsService().consulte()
        reply.send(listCars)
    }

}

export { ListCarsController }