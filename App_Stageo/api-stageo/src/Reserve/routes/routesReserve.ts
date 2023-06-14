import { Router } from "express"
import { getReserve, getReserveById, saveReserve, updateReserve, deleteReserve } from '../controller/ReserveController'


const routes = Router()


routes.get('/Reserve', getReserve)
routes.get('/Reserve/:id', getReserveById)
routes.post('/Reserve', saveReserve)
routes.put('/Reserve/:id', updateReserve)
routes.delete('/Reserve/:id', deleteReserve)


export default routes;