import { DeleteDriverService } from "../services/DeleteDriverService"
import { FastifyRequest, FastifyReply } from "fastify"

class DeleteDriverController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }
        
        const deletedCar = await new DeleteDriverService().remove(id)

        reply.send(deletedCar)
    }

}

export { DeleteDriverController }