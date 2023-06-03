import { AppDataSource } from "../../../data-source";
import { Request, Response } from "express";
import { Reserve } from "../entity/Reserve";


export const getReserve = async (request:Request, response:Response) => {
    const reserve = AppDataSource.getRepository(Reserve).find(request.body)
    if(reserve === null) {
        return response.status(404).json({ message: "Nenhuma reserva foi cadastrada ainda."})
    }
    return response.json(reserve)
}


export const getReserveById = async (request:Request, response:Response) => {
    const id  = request.params['id']
    const reserve = await AppDataSource.getRepository(Reserve).findOneBy({id})
    if(reserve.id === null){
        return response.status(404).json({message:"Reserva não encontrada."})
    }
    return response.json(reserve)
}

export const saveReserve = async (request:Request, response:Response) => {
    const reserve = await AppDataSource.getRepository(Reserve).save(request.body)
    if(reserve !== null){
        return response.status(404).json({message:"Reserva já realizada."})
    }
    return response.json(reserve)
}

export const deleteReserve = async (request: Request, response: Response) => {
    const id = request.params['id']
    const reserve = await AppDataSource.getRepository(Reserve).delete({id})
    if(reserve.affected === 1) {
        const reserveDelete = await AppDataSource.getRepository(Reserve).findOneBy({id})
        return response.json(reserveDelete,).status(200).json({message:"Reserva removida."})
    } 
    return response.status(404).json({message:"Reserva não encontrada"})
};

export const updateReserve = async (request:Request, response:Response) => {
    const id = request.params['id']
    const reserve = await AppDataSource.getRepository(Reserve).update({id},request.body)
    if(reserve.affected === 1) {
        const reserveUpdate = await AppDataSource.getRepository(Reserve).findOneBy({id})
        return response.json(reserveUpdate)
    }
    return response.status(404).json({message:"Reserva não encontrada."})
}