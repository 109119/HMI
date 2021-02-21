const Pool = require('pg').Pool

const pool = new Pool({
    user: 'test',
    host: 'localhost',
    database: 'hmi',
    password: 'test',
    port: 5432,
});

const getVolt = (request, response) => {
    pool.query('SELECT * FROM volt1', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getVoltIn = (request, response) => {
    pool.query('SELECT * FROM voltIn', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getNum = (request, response) => {
    pool.query('SELECT * FROM num', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const addVolt = (request, response) => {
    const {volt1, volt2} = request.body
    pool.query('insert into volt1 (voltage1, voltage2) values ($1, $2)', [volt1, volt2], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const addVoltIn = (request, response) => {
    const {voltIn1, voltIn2} = request.body
    pool.query('insert into voltIn (voltIn1, voltIn2) values ($1, $2)', [voltIn1, voltIn2], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const addNum = (request, response) => {
    const {state1, state2} = request.body
    pool.query('insert into num (state1, state2) values ($1, $2)', [state1, state2], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// const getVoltByID = (request, response) => {
//     const id = request.body
//     pool.query('SELECT * FROM volt where id = $1', [id], (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }

// const getID = (request, response) => {
//     const {state1, state2} = request.body
//     pool.query('SELECT id FROM num where state1 = $1 and state2 = $2', [state1, state2], (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }

// const updateVoltByID = (request, response) => {
//     const {id, volt} = request.body
//     pool.query('update volt set voltage = $1 where id = $2', [volt, id], (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }

module.exports = {
    getVolt,
    getNum,
    getVoltIn,
    addVolt,
    addNum,
    addVoltIn
    // getVoltByID,
    // getID,
    // updateVoltByID
}