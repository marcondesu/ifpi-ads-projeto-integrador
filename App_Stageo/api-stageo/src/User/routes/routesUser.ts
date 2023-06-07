import { Router } from "express"
import { deleteUser, getUser, getUserById, saveUser, updateUser } from "../controller/UserController"

const routes = Router()


routes.get('/User', getUser)
routes.get('/User/:id', getUserById)
routes.get('/User/:nome')
routes.post('/User', saveUser)
routes.delete('/User',deleteUser)
routes.put('/User',updateUser)

export default routes;