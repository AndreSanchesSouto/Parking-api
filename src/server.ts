import Fastify from "fastify";
import { routes } from "./routes";

const server = Fastify({ logger: true })



const start = async () => { 

    await server.register(routes)

    try {
        await server.listen({
            port: 3333
        })
    } catch(error) {
        server.log.error(error)
    }
}

start()