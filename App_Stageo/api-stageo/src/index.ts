import "reflect-metadata"
import * as express from "express"
import * as bodyParser from "body-parser"
import routesEquipment from "./Equipments/routes/routesEquipments"
import routesExemplary from "./Exemplary/routes/routesExemplary"
import { AppDataSource } from "./data-source"


const app = express()
// const port = process.env.PORT || 3333
AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
    console.log("Server is running in port 3333 || http://locallhost:3333")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})

app.use(bodyParser.json())
app.use(routesEquipment)
app.use(routesExemplary)
app.listen(3333) 
