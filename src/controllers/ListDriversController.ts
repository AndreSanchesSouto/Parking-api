import { FastifyRequest, FastifyReply } from "fastify"
import { ListDriversService } from "../services/ListDriversService"

class ListDriversController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listDrivers = await new ListDriversService().consulte();

        reply.send(listDrivers)
    }

}

export { ListDriversController }