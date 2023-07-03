import { Router } from "express"
import { getReserve, getReserveById, saveReserve, updateReserve, deleteReserve } from '../controller/ReserveController'


const routes = Router()


routes.get('/Reserve', getReserve)
routes.get('/Reserve/:reserveId', getReserveById)
routes.post('/Reserve', saveReserve)
routes.put('/Reserve/:reserveId', updateReserve)
routes.delete('/Reserve/:reserveId', deleteReserve)


export default routes;