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
    const {id} = request.params
    const userId = Number(id)
    const user = await AppDataSource.getRepository(User).findOneBy({id:userId})
    
    if(user.id === null){
        return response.status(404).json({message:'Usuário não encontrado'})
    }
    return response.json(user)
}



export const saveUser = async (request:Request, response:Response) => {
    const user = await AppDataSource.getRepository(User).save(request.body )
    response.json(user)
}

export const deleteUser = async (request: Request, response: Response) => {
    const {id} = request.params
    const userId = Number(id)
    const user = await AppDataSource.getRepository(User).delete({id:userId})
    if(user.affected === 1) {
        const equipmentDelete = await AppDataSource.getRepository(User).findOneBy({id:userId})
        return response.json(equipmentDelete,).status(200).json({message:"Removido removido."})
    } 
    return response.status(404).json({message:"Usuário não existe"})
};

export const updateUser = async (request:Request, response:Response) => {
    const {id} = request.params
    const userId = Number(id)
    const user = await AppDataSource.getRepository(User).update({id:userId},request.body)
    if(user.affected === 1) {
        const userUpdate = await AppDataSource.getRepository(User).findOneBy({id:userId})
        return response.json(userUpdate)
    }
    return response.status(404).json({message:"Usuário não existe."})
}
