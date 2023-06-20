import "reflect-metadata"
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors"
import routesEquipment from "./Equipments/routes/routesEquipments"
import { AppDataSource } from "./data-source"
import * as swagguerUi from "swagger-ui-express"
import * as swaggerDocument from "./swagger.json"
import routesUser from "./User/routes/routesUser"
import routesReserve from "./Reserve/routes/routesReserve"
import routerExemplary from "./Exemplary/routes/routesExemplary"


const app = express()
// const port = process.env.PORT || 3333
AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
    console.log("Server is running in port 3333 || http://localhost:3333")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})

const corsOptions = {
    origin: "http://localhost:3000", // Substitua pela origem do seu frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use("/api-docs",swagguerUi.serve, swagguerUi.setup(swaggerDocument))
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(routesReserve)
app.use(routesEquipment)
app.use(routesUser)
app.use(routerExemplary)
app.listen(3333)
