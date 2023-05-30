import { Router } from "express"
import { getExemplary, getExemplaryByTombo, getExemplaryByName } from "../controller/UserController"

const routes = Router()


routes.get('/Exemplary', getExemplary)
routes.get('/Exemplary/:tombo', getExemplaryByTombo)
routes.get('/Exemplary/:nome', getExemplaryByName)
routes.post('/')
routes.delete('/')
routes.put('/')

export default routes;