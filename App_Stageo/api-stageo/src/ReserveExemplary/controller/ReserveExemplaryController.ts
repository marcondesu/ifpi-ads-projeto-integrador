import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { ReserveExemplary } from "../entity/ReserveExemplary";
import { Reserve } from "../../Reserve/entity/Reserve";
import { Exemplary } from "../../Exemplary/entity/Exemplary";

export const getReserveExemplary = async (request:Request, response:Response) => {
    const reserve = AppDataSource.getRepository(ReserveExemplary).find(request.body)
    if(reserve === null) {
        return response.status(404).json({ message: "Nenhuma reserva encontrada no pelo sistema."})
    }
    return response.json(reserve)
}


// export const saveReserveExemplary = async (request:Request, response:Response) => {
//     const reserve = await AppDataSource.getRepository(ReserveExemplary).save(request.body)
//     if(reserve !== null){
//         return response.status(404).json({message:"Reserva já realizada."})
//     }
//     return response.json(reserve)
// }

export const saveReserveExemplary = async (request: Request, response: Response) => {
    const reserves = request.body
    const { reserve, exemplaries } = reserves;

    // Create a new ReserveExemplary instance
    const reserveExemplary = new ReserveExemplary();
    reserveExemplary.reserve = reserve;
    reserveExemplary.exemplaries = exemplaries;

    try {
        // Save the ReserveExemplary instance
        const savedReserveExemplary = await AppDataSource.getRepository(ReserveExemplary).save(reserveExemplary);
        return response.json(savedReserveExemplary);
    } catch (error) {
        return response.status(500).json({ message: "Failed to save the reserve with exemplaries." });
    }
};

export const deleteReserveExemplary = async (request: Request, response: Response) => {
    const {reserveId} = request.params
    const idReserve = Number(reserveId)
    const reserve = await AppDataSource.getRepository(Reserve).delete({reserveId:idReserve})
    if(reserve.affected === 1) {
        const reserveDelete = await AppDataSource.getRepository(Reserve).findOneBy({reserveId:idReserve})
        return response.json(reserveDelete,).status(200).json({message:"Reserva removida."})
    } 
    return response.status(404).json({message:"Reserva não encontrada"})
};

export const updateReserveExemplary = async (request:Request, response:Response) => {
    const {reserveId} = request.params
    const idReserve = Number(reserveId)
    const reserve = await AppDataSource.getRepository(Reserve).update({reserveId:idReserve},request.body)
    if(reserve.affected === 1) {
        const reserveUpdate = await AppDataSource.getRepository(Reserve).findOneBy({reserveId:idReserve})
        return response.json(reserveUpdate)
    }
    return response.status(404).json({message:"Reserva não encontrada."})
}