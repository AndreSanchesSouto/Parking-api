import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { CreateDriverController } from "./controllers/CreateDriverController"

export async function routes(server: FastifyInstance) {

    server.post("/driver-register", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateDriverController().handle(request, reply)
    })

}