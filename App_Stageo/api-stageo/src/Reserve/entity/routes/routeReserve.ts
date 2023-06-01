import { Router } from "express"
import { getReserve, getReserveById, saveReserve, updateReserve, deleteReserve } from '../controller/ReserveController'


const routes = Router()


routes.get('/Routes', getReserve)
routes.get('/Routes/:id', getReserveById)
routes.post('/Routes', saveReserve)
routes.get('/Routes/:id', updateReserve)
routes.get('/Routes/:id', deleteReserve)

export default routes;