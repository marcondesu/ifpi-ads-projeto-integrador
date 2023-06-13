import { Router, Request, Response} from "express"
import { deleteEquipments, getEquipments, getEquipmentsByName, getEquipmentsById, saveEquipments, updateEquipments} from "../controller/EquipmentController"

const routes = Router()


routes.get('/Equipments', getEquipments)
routes.get('/Equipments/:equipmentId', getEquipmentsById)
routes.get('/Equipments/:nome', getEquipmentsByName)
routes.post('/Equipments', saveEquipments)
routes.delete('/Equipments/:equipmentId', deleteEquipments)
routes.put('/Equipments/:equipmentId', updateEquipments)

export default routes;