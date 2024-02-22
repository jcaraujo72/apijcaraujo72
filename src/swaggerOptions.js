import { DB_HOST , PORT } from './config.js'



 // const cosa = "http://"+DB_HOST+":"+PORT 


export const options = {
    definition: {
          openapi: "3.1.0",
        info: {
            title: 'CTN test API',
            version: '1.0.0',
            description: "Prueba Api CTN"
        },
        servers: [
        {
            url: "http://"+DB_HOST+":"+PORT 
        }

        ]
    },
    apis: ["./src/routes/*.js"]
}