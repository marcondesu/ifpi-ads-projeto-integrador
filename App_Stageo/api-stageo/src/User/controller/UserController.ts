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
    const user = await AppDataSource.getRepository(User).findOne({idUser})
    
    if(user.id === null){
        return response.status(404).json({message:'Usuário não encontrado'})
    }
    return response.json(user)
}