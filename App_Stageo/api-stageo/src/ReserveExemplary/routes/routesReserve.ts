import { Router } from "express"
import { getReserve, getReserveById, saveReserve, updateReserve, deleteReserve } from '../controller/ReserveExemplaryController'


const routes = Router()


// routes.get('/ReserveExemplary', getReserve)
// routes.get('/ReserveExemplary/:id', getReserveById)
routes.post('/ReserveExemplary', saveReserve)
routes.put('/ReserveExemplary/', updateReserve)
routes.delete('/ReserveExemplary/', deleteReserve)


export default routes;