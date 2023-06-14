import { Router } from "express"
import { deleteUser, getUser, getUserById, saveUser, updateUser } from "../controller/UserController"

const routes = Router()


routes.get('/User', getUser)
routes.get('/User/:userId', getUserById)
routes.get('/User/:nome')
routes.post('/User', saveUser)
routes.delete('/User/:userId',deleteUser)
routes.put('/User/:userId',updateUser)

export default routes;