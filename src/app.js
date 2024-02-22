import express from "express"
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import cors from 'cors'  // new
// SWAGGER
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

import  {options} from './swaggerOptions.js' 


// Desde configj}.js extraia la variable PORT y es donde escuchara express que es app
// import {PORT } from './config.js'

const app = express()
app.use(express.json()) // Para que interprete/entienda  datos json 

app.use(cors())

const swaggerSpec = swaggerJsDoc(options)

app.use(indexRoutes)

// app.use('/api/', employeesRoutes)
app.use('/', employeesRoutes)
// Antes para ver app.use('/swagger/', swaggerUI.serve, swaggerUI.setup(specs));
//==Opcion analizar
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
//== Opcion analizar

// Funcion middleware es decir un req un res y un next
app.use (( req, res, next) => {
    res.status(404).json ({
        message:' endpoint NO ENCONTRADO'
    })
})

export default app; ; 