import { Router, Request, Response} from "express"
import { deleteEquipments, getEquipments, getEquipmentsByName, getEquipmentsById, saveEquipments, updateEquipments} from "../controller/EquipmentController"

const routes = Router()


routes.get('/Equipments', getEquipments)
routes.get('/Equipments/:id', getEquipmentsById)
routes.get('/Equipments/:nome', getEquipmentsByName)
routes.post('/Equipments', saveEquipments)
routes.delete('/Equipments/:id', deleteEquipments)
routes.put('/Equipments/:id', updateEquipments)

export default routes;