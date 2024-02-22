import {config} from 'dotenv'
config()
// process es un objeto global de nodejs
// env almacena todas las variable y PORT es una variable que definimos eb .env
//console.log( process.env.PORT)
//console.log( process.env.DB_HOST)
//console.log( process.env.DB_USER)
//console.log( process.env.DB_PASSWORD)
//console.log( process.env.DB_PORT)
//console.log( process.env.DB_DATABASE)

// obtenga lo que tiene la variable PORT y si no existe ponga 3000 y exportelo en la variabla PORT
export const PORT           = process.env.PORT || 4000
export const DB_USER        = process.env.DB_USER || 'root'
export const DB_PASSWORD    = process.env.DB_PASSWORD || 'COCOloco*2099'
export const DB_HOST        = process.env.DB_HOST || 'localhost'
export const DB_PORT        = process.env.DB_PORT || 3306
export const DB_DATABASE    = process.env.DB_DATABASE || 'companydb'


