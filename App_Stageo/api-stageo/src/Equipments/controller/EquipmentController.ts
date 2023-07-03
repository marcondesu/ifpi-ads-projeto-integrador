import { ILike } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Equipments } from "../entity/Equipments";
import { Request, Response } from "express";

export const getEquipments = async (request:Request, response:Response) => {
    const equipments = await AppDataSource.getRepository(Equipments).find(request.body)
    if(equipments === null){
        return response.status(404).json({message:"Não há equipamentos disponíveis."})
    }
    return response.json(equipments)
}

export const getEquipmentsById = async (request:Request, response:Response) => {
    const {equipmentId}  = request.params
    const ID = Number(equipmentId)
    const equipment = await AppDataSource.getRepository(Equipments).findOneBy({equipmentId:ID})
    if(equipment.equipmentId === null){
        return response.status(404).json({message:"Equipamento não encontrado."})
    }
    return response.json(equipment)
}


export const getEquipmentsByName = async (request: Request, response: Response) => {
    const {nome} = request.params;
    const equipmentRepository = AppDataSource.getRepository(Equipments);
    const equipmentQuery = await equipmentRepository.find({
      where: { nome: ILike(`%${nome}%`) },
    });
  
    if (equipmentQuery.length === 0) {
      return response.status(404).json({ message: "Equipamento não encontrado." });
    }
  
    return response.json(equipmentQuery);
}



export const saveEquipments = async (request:Request, response:Response) => {
    const equipments = await AppDataSource.getRepository(Equipments).save(request.body )
    response.json(equipments)
  }


export const deleteEquipments = async (request: Request, response: Response) => {
    const { equipmentId } = request.params;
    const ID = Number(equipmentId);
  
    const equipmentRepository = AppDataSource.getRepository(Equipments);
  
    try {
      const equipment = await equipmentRepository.findOneBy({ equipmentId: ID });
  
      if (!equipment) {
        return response.status(404).json({ message: "Equipamento não encontrado." });
      }
  
      await equipmentRepository.delete({ equipmentId: ID });
  
      return response.status(200).json({ message: "Equipamento removido." });
    } catch (error) {
      console.error("Failed to delete equipment", error);
      return response.status(500).json({ message: "Erro ao deletar o equipamento." });
    }
};
  

export const updateEquipments = async (request:Request, response:Response) => {
    const {equipmentId} = request.params
    const ID = Number(equipmentId)
    const equipments = await AppDataSource.getRepository(Equipments).update({equipmentId:ID},request.body)
    if(equipments.affected === 1) {
        const equipmentUpdate = await AppDataSource.getRepository(Equipments).findOneBy({equipmentId:ID})
        return response.json(equipmentUpdate)
    }
    return response.status(404).json({message:"Equipamento não encontrado."})
}
