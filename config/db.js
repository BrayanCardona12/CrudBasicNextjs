import {createPool} from 'mysql2/promise'

const pool =createPool({
    host: 'containers-us-west-9.railway.app',
    user: 'root',
    password: 'dJukCCZ6YjulyDJ41Ihy',
    port: 5518,
    database: 'railway'
})

export {pool}