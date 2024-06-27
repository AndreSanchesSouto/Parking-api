import { Driver } from "../interfaces/Driver";
import { PrismaClient } from "@prisma/client";

export class CreateDriverService {

    async build({name, year_born, password, cellphone}: Driver) {
        
        return new PrismaClient().driver.create({
            data: { name, year_born, password, cellphone }
        })
    }

}