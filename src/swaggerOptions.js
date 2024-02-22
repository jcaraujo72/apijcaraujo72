import { PORT } from './config.js'

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
            url: "http://localhost:4000"
        }

        ]
    },
    apis: ["./src/routes/*.js"]
}