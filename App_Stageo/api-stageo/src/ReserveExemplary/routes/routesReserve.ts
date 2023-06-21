import { Router } from "express"
import { getReserveExemplary, saveReserveExemplary, updateReserveExemplary, deleteReserveExemplary } from '../controller/ReserveExemplaryController'


const routes = Router()


routes.get('/ReserveExemplary', getReserveExemplary)
routes.post('/ReserveExemplary', saveReserveExemplary)
routes.put('/ReserveExemplary/', updateReserveExemplary)
routes.delete('/ReserveExemplary/', deleteReserveExemplary)


export default routes;