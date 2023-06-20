import { AppDataSource } from "../../data-source";
import { Exemplary } from "../entity/Exemplary";
import { Request, Response } from "express";
import { Equipments } from "../../Equipments/entity/Equipments";

export const getExemplary = async (request:Request, response:Response) => {
    const exemplary = await AppDataSource.getRepository(Exemplary).find(request.body)
    if(exemplary === null){
        return response.status(404).json({message:"Exemplar não encontrado."})
    }
    return response.json(exemplary)
}


export const getExemplaryByTombo = async (request:Request, response:Response) => {
    const {tombo} = request.params
    const tomboExemplary = Number(tombo)
    const exemplary = AppDataSource.getRepository(Exemplary).findOneBy({tombo:tomboExemplary})
    if(exemplary === null){
        return response.status(404).json({message:"Exemplar não encontrado."})
    }
    return response.json(exemplary)
}

export const getExemplaryByName = async (request:Request, response:Response) => {
    const {nome}  = request.params
    const exemplary =  await AppDataSource.getRepository(Exemplary).createQueryBuilder('Exemplary').where('Exemplary.nome LIKE :nome', { nome: `%${nome}%` }).getMany()
    if(exemplary === null){
        return response.status(404).json({message:"Exemplar do equipamento não encontrado."})
    }
    return response.json(exemplary)
}

// export const saveExemplary = async (request:Request, response:Response) => {
//     const exemplary = await AppDataSource.getRepository(Exemplary).save(request.body )
//     response.json(exemplary)
// }

export const saveExemplary = async (request: Request, response: Response) => {
    const exemplaryData = request.body;
    const { equipmentId, status } = exemplaryData; // Supondo que o ID do equipamento e a imagem sejam fornecidos no corpo da requisição
    
    try {
        // Verificar se o equipamento existe
        const equipment = await AppDataSource.getRepository(Equipments).find(equipmentId);
        if (!equipment) {
            return response.status(404).json({ message: "Equipamento não encontrado." });
        }
    
        // Criar o exemplar e associá-lo ao equipamento
        const exemplary = request.body;
        exemplary.equipments = equipment; // Associar o exemplar ao equipamento
        exemplary.status = status
    
        // Salvar o exemplar
        const savedExemplary = await AppDataSource.getRepository(Exemplary).save(exemplary);
        return response.json(savedExemplary);
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Ocorreu um erro ao salvar o exemplar." });
    }
};
   
  



export const deleteExemplary = async (request: Request, response: Response) => {
    const {tombo} = request.params
    const tomboExemplary = Number(tombo)
    const exemplary = await AppDataSource.getRepository(Exemplary).delete({tombo:tomboExemplary})
    if(exemplary.affected === 1) {
        const exemplarDelete = await AppDataSource.getRepository(Exemplary).findOneBy({tombo:tomboExemplary})
        return response.json(exemplarDelete,).status(200).json({message:"Exemplar removido."})
    } 
    return response.status(404).json({message:"Exemplar não encontrado"})
};

export const updateExemplary = async (request:Request, response:Response) => {
    const {tombo} = request.params
    const tomboExemplary = Number(tombo)
    const exemplary = await AppDataSource.getRepository(Exemplary).update({tombo:tomboExemplary},request.body)
    if(exemplary.affected === 1) {
        const exemplaryUpdate = await AppDataSource.getRepository(Exemplary).findOneBy({tombo:tomboExemplary})
        return response.json(exemplaryUpdate)
    }
    return response.status(404).json({message:"Exemplar não encontrado."})
}
