import { AppDataSource } from "../../data-source";
import { User } from "../entity/User";
import { Request, Response } from "express";

export const getUser = async (request:Request, response:Response) => {
    const user = await AppDataSource.getRepository(User).find(request.body)
    if(user === null){
        return response.status(404).json({message:'Não há usuários cadastrados no sistema.'})
    }
    return response.json(user)
}

export const getUserById = async (request:Request, response:Response) => {
    const {userId} = request.params
    const ID = Number(userId)
    const user = await AppDataSource.getRepository(User).findOneBy({userId:ID})
    
    if(user.userId === null){
        return response.status(404).json({message:'Usuário não encontrado'})
    }
    return response.json(user)
}



export const saveUser = async (request:Request, response:Response) => {
    const {email} = request.params
    const user = await AppDataSource.getRepository(User).save(request.body )
    if(email !== null){
        return response.status(404).json({message:'Usuário já cadastrado.'})
        
    }

    response.json(user)
}

export const deleteUser = async (request: Request, response: Response) => {
    const {userId} = request.params
    const ID = Number(userId)
    const user = await AppDataSource.getRepository(User).delete({userId:ID})
    if(user.affected === 1) {
        const equipmentDelete = await AppDataSource.getRepository(User).findOneBy({userId:ID})
        return response.json(equipmentDelete,).status(200).json({message:"Removido removido."})
    } 
    return response.status(404).json({message:"Usuário não existe"})
};

export const updateUser = async (request:Request, response:Response) => {
    const {userId} = request.params
    const ID = Number(userId)
    const user = await AppDataSource.getRepository(User).update({userId:ID},request.body)
    if(user.affected === 1) {
        const userUpdate = await AppDataSource.getRepository(User).findOneBy({userId:ID})
        return response.json(userUpdate)
    }
    return response.status(404).json({message:"Usuário não existe."})
}
