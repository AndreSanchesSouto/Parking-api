import { FastifyRequest, FastifyReply } from "fastify";
import { CreateDriverService } from "../services/CreateDriverService";

export class CreateDriverController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, year_born, password, cellphone
        } = request.body as {
            name: string,
            year_born: string,
            password: string,
            cellphone: string
        }

        const driver = await new CreateDriverService().build({ 
            name, year_born, password, cellphone
        })

        reply.send(driver)
        
    }

}