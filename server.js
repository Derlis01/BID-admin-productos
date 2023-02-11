import express from "express";
const app = express();
const port = 8000
import route from "./server/routes/server.routes.js";
import './server/config/mongodb.js'
import cors from 'cors'



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(route)


app.listen(port, () => console.log('server on port ' + port))