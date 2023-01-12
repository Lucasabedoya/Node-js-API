import { getConnection } from "../database/database"


const getAllPersonas = async ( req, res ) => {
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT * FROM personas");
        if ( result.length !== 0 ) { 
            res.json(result)
        } else { 
            res.json('Users not found') 
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    } 
};

const getPersona = async ( req, res ) => {

    const { cc } = req.params

    try {
        const connection = await getConnection()
        const result = await connection.query(`SELECT cedula, nombre, apellido FROM personas where cedula = ${cc}`);
        if ( result.length !== 0 ) { 
            res.json(result)
        } else { 
            res.json('User not found') 
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    } 
};

const addPersona = async ( req, res ) => {
    try {
        const { cedula, nombre, apellido } = req.body;
        const persona =  { cedula, nombre, apellido } 

        if ( nombre !== undefined && apellido !== undefined) {
            const connection = await getConnection()
            const result = await connection.query("INSERT INTO personas set ?", persona);
            res.json('Añadido correctamente')
        } else {
            res.status(400).json({ message: "Bad Request, Please fill all fields."})
        }
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    } 
};

const deletePersona = async ( req, res ) => {
    try {
        const { cc } = req.params;

        if ( cc !== undefined ) {
            const connection = await getConnection()
            const result = await connection.query(`DELETE FROM personas where cedula = ${cc}`);
            if ( result.affectedRows !== 0 ) { 
                res.json('Eliminado correctamente')
            } else { 
                res.json('User not found') 
            }
        } else {
            res.status(400).json({ message: "Bad Request, Please fill all fields."})
        }
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    } 
};

const updatePersona = async ( req, res ) => {
    try {
        const { cc } = req.params;
        const { nombre, apellido } = req.body

        if ( cc !== undefined && nombre !== undefined && apellido !== undefined ) {
            const connection = await getConnection()
            const result = await connection.query(`UPDATE personas SET nombre = '${nombre}', apellido = '${apellido}' WHERE cedula = ${cc}`);
            if ( result.affectedRows !== 0 ) { 
                res.json('Actualizado correctamente')
            } else { 
                res.json('User not found') 
            }
        } else {
            res.status(400).json({ message: "Bad Request, Please fill all fields."})
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    } 
};

export const methods = {
    getAllPersonas,
    getPersona,
    addPersona,
    deletePersona,
    updatePersona,
}