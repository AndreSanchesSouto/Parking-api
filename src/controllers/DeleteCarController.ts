import { DeleteCarService } from "../services/DeleteCarService"
import {  FastifyRequest,FastifyReply } from "fastify"

class DeleteCarController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { plate } = request.query as { plate: string }
        const deletedCar = await new DeleteCarService().delete(plate)
        reply.send(deletedCar)
    }

}

export { DeleteCarController }