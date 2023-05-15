import { AppDataSource } from "../../data-source";
import { Specimen } from "../entity/Specimen";
import { Request, Response } from "express";

export const getSpecimen = async (request:Request, response:Response) => {
    const specimen = await AppDataSource.getRepository(Specimen).find(request.body)
    if(specimen === null){
        return response.status(404).json({message:"Exemplar não encontrado."})
    }
    return response.json(specimen)
}