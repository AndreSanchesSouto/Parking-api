import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { CreateDriverController } from "./controllers/CreateDriverController"
import { CreateCarController } from "./controllers/CreateCarController"
import { ListDriversController } from "./controllers/ListDriversController"
import { ListCarsController } from "./controllers/ListCarsController"
import { DeleteCarController } from "./controllers/DeleteCarController"
import { DeleteDriverController } from "./controllers/DeleteDriverController"
import { CreateValetController } from "./controllers/CreateValetController"

export async function routes(server: FastifyInstance) {

    server.post("/register", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateValetController().handle(request, reply)
    })

    server.get("/drivers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListDriversController().handle(request, reply)
    })

    server.post("/driver-register", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateDriverController().handle(request, reply)
    })

    server.delete("/driver-delete", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteDriverController().handle(request, reply)
    })

    server.get("/cars", (request: FastifyRequest, reply: FastifyReply) => {
        console.log(new ListCarsController().handle(request, reply))

        return new ListCarsController().handle(request, reply)
    })

    server.post("/car-register", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCarController().handle(request, reply)
    })

    server.delete("/car-delete", async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCarController().handle(request, reply)
    })

}