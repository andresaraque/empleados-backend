//=============================================
// RUTA: /api/empleados
//=============================================

const { Router } = require('express');
const { getEmpleados, crearEmpleado, eliminarEmpleado, actualizarEmpleado, getOne } = require('../controllers/empleados')

const router = Router();

router.get('/', getEmpleados);
router.get('/:id', getOne);
router.post('/', crearEmpleado);
router.delete('/:id', eliminarEmpleado);
router.put('/:id', actualizarEmpleado);
module.exports = router;