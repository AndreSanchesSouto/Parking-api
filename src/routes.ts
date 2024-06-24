import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { CreateDriverController } from "./controllers/CreateDriverController"
import { CreateCarController } from "./controllers/CreateCarController"

export async function routes(server: FastifyInstance) {

    server.post("/driver-register", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateDriverController().handle(request, reply)
    })

    server.post("/car-register", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCarController().handle(request, reply)
    })

}