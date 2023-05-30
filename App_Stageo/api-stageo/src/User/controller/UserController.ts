import { AppDataSource } from "../../data-source";
import { User } from "../entity/User";
import { Request, Response } from "express";

export const getUser = async (request:Request, response:Response) => {
    const user = await AppDataSource.getRepository(User).find(request.body)
    if(user === null){
        return response.status(404)
    }
    return response.json(user)
}

export const getUserById = async (request:Request, response:Response) => {
    const idUser = request.params['id']
    const user = await AppDataSource.getRepository(User).findOneBy({idUser})

    if(user.id === null){
        return response.status(404).json({message:'Usuário não encontrado'})
    }
    return response.json(user)
}



export const saveUser = async (request:Request, response:Response) => {
    const user = await AppDataSource.getRepository(User).save(request.body )
    response.json(user)
}

export const deleteExemplary = async (request: Request, response: Response) => {
    const id = request.params['id']
    const user = await AppDataSource.getRepository(User).delete({id})
    if(user.affected === 1) {
        const equipmentDelete = await AppDataSource.getRepository(User).findOneBy({id})
        return response.json(equipmentDelete,).status(200).json({message:"Equipamento removido."})
    } 
    return response.status(404).json({message:"Exemplar não encontrado"})
};

export const updateUser = async (request:Request, response:Response) => {
    const id = request.params['id']
    const User = await AppDataSource.getRepository(User).update({id},request.body)
    if(User.affected === 1) {
        const UserUpdate = await AppDataSource.getRepository(User).findOneBy({id})
        return response.json(UserUpdate)
    }
    return response.status(404).json({message:"Exemplar não encontrado."})
}
