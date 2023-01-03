import { Router } from "express";
import { methods as personasController } from "./../controllers/personas.controller";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   UsuarioWithCedula:
 *     type: object
 *     properties:
 *       cedula:
 *         type: string
 *         description: Cedula de la persona
 *       nombre:
 *         type: string
 *         description: Nombre de la persona
 *       apellido:
 *         type: string
 *         description: Apellido de la persona
 *   Usuario:
 *     type: object
 *     properties:
 *       nombre:
 *         type: string
 *         description: Nombre de la persona
 *       apellido:
 *         type: string
 *         description: Apellido de la persona
 *   objetoRespuestaUsuario:
 *     type: object
 *     properties:
 *       cedula:
 *         type: string
 *         description: Cedula de la persona
 *       nombre:
 *         type: string
 *         description: Nombre de la persona
 *       apellido:
 *         type: string
 *         description: Apellido de la persona
 */

router.get( "/all", personasController.getAllPersonas )
/**
 * @openapi
 * /api/personas/all:
 *   get:
 *     tags:
 *       - Personas
 *     summary: Obtener todas las personas registradas en la base de datos.
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 200
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: '#/components/schemas/objetoRespuestaUsuario'
 *       500:
 *         description: Internal server error  
 */
router.get( "/:cc", personasController.getPersona )
/**
 * @openapi
 * /api/personas/:cedula:
 *   get:
 *     tags:
 *       - Personas
 *     summary: Obtener los datos de una persona segun la cedula.
 *     parameters:
 *      - name: Cedula
 *        in: path
 *        description: Cedula del usuario a obtener
 *        required: true
 *        style: simple
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/UsuarioWithCedula'
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 200
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: '#/components/schemas/objetoRespuestaUsuario'
 *       500:
 *         description: Internal server error  
 */
router.post( "/add-persona", personasController.addPersona )
/**
 * @openapi
 * /api/personas/add-persona:
 *   post:
 *     tags:
 *       - Personas
 *     summary: Añandir una nueva persona a la tabla personas en la base de datos.
 *     requestBody:
 *       content:
 *        application/json:
 *           schema:
 *             $ref: '#/components/schemas/UsuarioWithCedula'
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 200
 *       500:
 *         description: Internal server error  
 */
router.post( "/delete-persona/:cc", personasController.deletePersona )
/**
 * @openapi
 * /api/personas/delete-persona/:cedula:
 *   post:
 *     tags:
 *       - Personas
 *     summary: Eliminar una persona de la base de datos filtrando por su cedula.
 *     parameters:
 *      - name: Cedula
 *        in: path
 *        description: Cedula del usuario a eliminar
 *        required: true
 *        style: simple
 *        schema:
 *          type: string 
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 200
 *       500:
 *         description: Internal server error  
 */
router.put( "/update-persona/:cc", personasController.updatePersona )
/**
 * @openapi
 * /api/personas/update-persona/:cedula:
 *   put:
 *     tags:
 *       - Personas
 *     summary: Actualizar nombre y apellido de una persona filtrando por su cedula.
 *     parameters:
 *      - name: Cedula
 *        in: path
 *        description: Cedula del usuario a obtener
 *        required: true
 *        style: simple
 *        schema:
 *          type: string 
 *     requestBody:
 *       content:
 *        application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 200    
 *       400:
 *         description: Bad Request    
 *       500:
 *         description: Internal server error               
 */


export default router;