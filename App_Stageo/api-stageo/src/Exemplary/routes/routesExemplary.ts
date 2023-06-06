import { Router } from "express"
import { getExemplary, getExemplaryByTombo, getExemplaryByName, deleteExemplary, saveExemplary, updateExemplary } from "../controller/ExemplarController"

const routes = Router()


routes.get('/Exemplary', getExemplary)
routes.get('/Exemplary/:tombo', getExemplaryByTombo)
routes.get('/Exemplary/:nome', getExemplaryByName)
routes.post('/Exemplary',saveExemplary)
routes.delete('/Exemplary/:tombo', deleteExemplary)
routes.put('/Exemplary/:id',updateExemplary)

export default routes;