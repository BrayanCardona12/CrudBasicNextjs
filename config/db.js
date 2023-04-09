import {createPool} from 'mysql2/promise'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './port'


const pool =createPool({
    host: 'containers-us-west-9.railway.app',
    user: 'root',
    password: 'dJukCCZ6YjulyDJ41Ihy',
    port: 5518,
    database: 'railway'
})

export {pool}