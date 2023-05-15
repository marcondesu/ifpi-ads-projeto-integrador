import { Router } from "express"
import { getSpecimen } from "../controller/SpecimenController"

const routes = Router()


routes.get('/Specimen', getSpecimen)
routes.get('/')
routes.get('/')
routes.post('/')
routes.delete('/')
routes.put('/')

export default routes;