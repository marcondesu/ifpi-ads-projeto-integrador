import { AppDataSource } from "../../data-source";
import { Exemplary } from "../entity/Exemplary";
import { Request, Response } from "express";

export const getExemplary = async (request:Request, response:Response) => {
    const exemplary = await AppDataSource.getRepository(Exemplary).find(request.body)
    if(exemplary === null){
        return response.status(404).json({message:"Exemplar não encontrado."})
    }
    return response.json(exemplary)
}


export const getExemplaryByTombo = async (request:Request, response:Response) => {
    const tombo = request.params['tombo']
    const exemplary = AppDataSource.getRepository(Exemplary).findOneBy({tombo})
    if(exemplary === null){
        return response.status(404).json({message:"Exemplar não encontrado."})
    }
    return response.json(exemplary)
}

export const getExemplaryByName = async (request:Request, response:Response) => {
    const nome  = request.params
    const exemplary =  await AppDataSource.getRepository(Exemplary).createQueryBuilder('Exemplary').where('Exemplary.nome LIKE :nome', { nome: `%${nome}%` }).getMany()
    if(exemplary === null){
        return response.status(404).json({message:"Exemplar do equipamento não encontrado."})
    }
    return response.json(exemplary)
}

export const deleteExemplary = async (request: Request, response: Response) => {
    const tombo = request.params['tombo']
    const exemplary = await AppDataSource.getRepository(Exemplary).delete({tombo})
    if(exemplary.affected === 1) {
        const equipmentDelete = await AppDataSource.getRepository(Exemplary).findOneBy({tombo})
        return response.json(equipmentDelete,).status(200).json({message:"Equipamento removido."})
    } 
    return response.status(404).json({message:"Exemplar não encontrado"})
};

export const updateExemplary = async (request:Request, response:Response) => {
    const tombo = request.params['tombo']
    const exemplary = await AppDataSource.getRepository(Exemplary).update({tombo},request.body)
    if(exemplary.affected === 1) {
        const exemplaryUpdate = await AppDataSource.getRepository(Exemplary).findOneBy({tombo})
        return response.json(exemplaryUpdate)
    }
    return response.status(404).json({message:"Exemplar não encontrado."})
}
