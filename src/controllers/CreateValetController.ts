import { FastifyRequest, FastifyReply } from "fastify";
import { CreateValetService } from "../services/CreateValetService"

class CreateValetController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id, fullname, cpf, email, cellphone, password } = request.body as {
            id: string,
            fullname: string
            cpf: string,
            email: string,
            cellphone: string,
            password: string
        }
        const valet = await new CreateValetService().build( {
            id, fullname, cpf, email, cellphone, password
        })

        reply.send(valet)
    }
}

export { CreateValetController }