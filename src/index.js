import app from './app.js'
import { PORT , DB_PORT, DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD } from './config.js'

app.listen(PORT)
console.log(' DB_HOST y PORT ==> ', DB_HOST , PORT , ' - DB_DATABASE Y DB_PORT ', DB_DATABASE ,  DB_PORT)
console.log('USER y PASSWORD ', DB_USER , DB_PASSWORD)