const sql = require('mssql');

//=============================================
//GET
//=============================================
const getEmpleados = async (req, res) => {
    try {
        const result = await sql.query`select * from ESchema.Employees`;

        res.status(200).json(result.recordset);

    } catch (err) {
        res.status(500).json({
            ok: false,
            msg: 'Error al cargar los empleados',
            error: err
        });
        throw new Error(err);
    }
}

//=============================================
//POST
//=============================================
const crearEmpleado = async (req, res) => {
    const body = req.body;
    try {
        const result = await sql.query`INSERT INTO ESchema.Employees 
        (Nombre, Salario, Cargo, Img) VALUES(${body.Nombre},${body.Salario},${body.Cargo},${body.Img})`;

        res.status(201).json({
            ok: true,
            msg: 'Empleado creado exitosamente'
        });

    } catch (err) {
        res.status(400).json({
            ok: false,
            msg: 'Variables incorrectas',
            error: err
        });
        throw new Error(err);
    }
}

//=============================================
//DELETE
//=============================================
const eliminarEmpleado = async (req, res) => {
    const id = req.params.id;
    try {
        respuesta = await buscar(id);
    } catch (err) {
        res.status(400).json({
            ok: false,
            msg: err
        });
        throw new Error(err);
    }
    try {
        await sql.query`DELETE FROM ESchema.Employees WHERE id =${id}`;

        res.status(200).json({
            ok: true,
            msg: 'Empleado eliminado exitosamente, id: '+ id
        });

    } catch (err) {
        res.status(400).json({
            ok: false,
            msg: 'Error al eliminar empleado',
            error: err
        });
        throw new Error(err);
    }
}

//=============================================
//PUT
//=============================================
const actualizarEmpleado = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        respuesta = await buscar(id);
    } catch (err) {
        res.status(400).json({
            ok: false,
            msg: err
        });
        throw new Error(err);
    }

    try {
        await sql.query`UPDATE ESchema.Employees set 
        Nombre = ${body.Nombre}, Salario = ${body.Salario},
        Cargo = ${body.Cargo}, Img = ${body.Img} WHERE id =${id}`;
        
        res.status(200).json({
            ok: true,
            msg: 'Empleado actualizado exitosamente, id: '+ id
        });

    } catch (err) {
        res.status(400).json({
            ok: false,
            msg: 'Error al actualizar empleado!',
            error: err
        });
        throw new Error(err);
    }
}

//=============================================
//Traer uno
//=============================================
const getOne = async (req, res) => {
    try {
        respuesta = await buscar(req.params.id);

        res.status(200).json(respuesta);
    } catch (err) {
        res.status(400).json({
            ok: false,
            msg: 'Error cargando empleado!',
            error: err
        });
        throw new Error(err);
    }
}

function buscar(id) {
    return new Promise( async (resolve, reject) => {
        try {
            const result = await sql.query`SELECT * FROM ESchema.Employees WHERE id = ${id}`;
            if (result.recordset.length > 0) {
                resolve(result.recordset[0]);
            } else {
                reject('No existe empleado con el id ingresado ('+id+')');
            }
        } catch (err) {
            reject(err);
        }
        
    });
}


module.exports = {
    getEmpleados,
    crearEmpleado,
    eliminarEmpleado,
    actualizarEmpleado,
    getOne
}