import Fastify from "fastify";
import { routes } from "./routes";
import cors from '@fastify/cors';

const server = Fastify({ logger: true })



const start = async () => { 

    await server.register(routes)
    await server.register(cors)


    try {
        await server.listen({
            port: 3333
        })
    } catch(error) {
        server.log.error(error)
    }
}

start()