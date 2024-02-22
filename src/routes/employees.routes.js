import { Router } from 'express'
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from '../controllers/employees.controller.js'

const router = Router()
/**
 * @swagger
 * components:
 *  securitySchemes:
 *    cors_auth:
 *      type: oauth2
 *  schemas:
 *    employee:
 *       type: object
 *       properties:
 *          id:
 *           type: string
 *          name:
 *           type: string
 *          salary:
 *           type: numerica
 *       required:
 *          - name
 *          - salary
 *       example:
 *          id: 43435$#####44
 *          name: Nombre del sujeto
 *          salary: 24361   
 */

/**
 * @swagger
 * /api/employees:
 *  get:
 *   summary: Permite obtener todos los registros
 *   responses:
 *      200:
 *       description: Lista completa de los registros
 *       content:
 *          application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/employee'
 *   security:
 *     - cors_auth:
 *         - cors.r  
 */

router.get ('/api/employees', getEmployees )

router.get ('/api/employees/:id', getEmployee )

router.post ('/api/employees', createEmployee)

// router.put ('/employees/:id', updateEmployee) El put funciona pero cuando actualizo todos los campos,
//             pero si quiero solo actualizar un campo debo usar PACTH y modificar el udate con NULL
router.patch ('/api/employees/:id', updateEmployee)

router.delete ('/api/employees/:id', deleteEmployee )


export default router