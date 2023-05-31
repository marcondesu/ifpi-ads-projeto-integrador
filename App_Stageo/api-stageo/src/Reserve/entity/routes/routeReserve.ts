import { Router } from "express"
import { getReserve, getReserveById, saveReserve, updateEquipments, deleteReserve } from '../controller/ReserveController'


const routes = Router()


routes.get('/Routes', getReserve)

export default routes;