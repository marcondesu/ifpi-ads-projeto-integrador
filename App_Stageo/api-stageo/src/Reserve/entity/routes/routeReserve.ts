import { Router } from "express"
import { getReserve, getReserveById, saveReserve, updateReserve, deleteReserve } from '../controller/ReserveController'


const routes = Router()


routes.get('/Routes', getReserve)
routes.get('/Routes/:id', getReserveById)
routes.post('/Routes', saveReserve)
routes.put('/Routes/:id', updateReserve)
routes.delete('/Routes/:id', deleteReserve)


export default routes;