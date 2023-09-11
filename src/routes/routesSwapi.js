const express = require('express')
const router = express.Router()

const swapiController = require('../controllers/swapiController')


const apiSwapi = new swapiController();
// vamos a documentr con swagger express

/**
 * @openapi
 *  components:
 *   schemas:
 *     StarWarsPeople:
 *       type: object
 *       properties:

 *         nombre:
 *           type: string
 *           example: Jesus
 *         altura:
 *           type: string
 *           example: 1.72

 * @openapi
 * /api:
 *   get:

 *     tags:
 *       - Get info StarWars API
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *
 *                   items:
 *                     $ref: '#/components/schemas/StarWarsPeople'
 *
 *
 */

router.get('/',  apiSwapi.getStarWarsPeopleData);

/**
 * @openapi
 *  components:
 *   schemas:
 *     StarShip ID:
 *       type: object
 *       properties:

 *         nombre:
 *           type: string
 *           example: CR90 corvette
 *         modelo:
 *           type: string
 *           example: CR90 corvette

 * @openapi
 * /api/starship/{id}:
 *
 *   get:
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: id de la nave
 *        type: string
 *
 *     tags:
 *       - Get info STARSHIP API
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *
 *                   items:
 *                     $ref: '#/components/schemas/StarWarsPeople'
 *
 *
 */
router.get('/starship/:id',function(req,res){
  console.log("entre",req.params.id)
  apiSwapi.getStarshipData(req.params.id,res);

});
/**
 * @openapi
 *  components:
 *   schemas:
 *     Supplier:
 *       type: object
 *       properties:

 *         name:
 *           type: string
 *           example: test
 *         surname:
 *           type: string
 *           example: tester
 *         mail:
 *          type: string
 *          example: testgmail.com
 *         password:
 *          type: string
 *          example: hasheado
 *
 *

 * @openapi
 * /api/get-supplier:
 *
 *   get:

 *
 *     tags:
 *       - Get info supplier
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *
 *                   items:
 *                     $ref: '#/components/schemas/Supplier'
 *
 *
 */
router.get('/get-supplier',apiSwapi.getSupplier)
/**
 * @openapi
 *  components:
 *   schemas:
 *     Supplier:
 *       type: object
 *       properties:

 *         name:
 *           type: string
 *           example: test
 *         lastname:
 *           type: string
 *           example: tester
 *         mail:
 *          type: string
 *          example: testgmail.com
 *         password:
 *          type: string
 *          example: hasheado
 *
 *

 * @openapi
 * /api/create-supplier:
 *
 *   post:
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Supplier'
 *        example:
 *          name: test
 *          lastname: tester
 *          mail: testgmail.com
 *          password: hasheado
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *     summary : create new supplier
 *
 *     consumes:
 *      - application/json
 *     produces:
 *      - application/json
 *
 *

 *
 *
 *     tags:
 *       - Create  supplier
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *
 *                   items:
 *                     $ref: '#/components/schemas/Supplier'
 *
 *
 */
router.post('/create-supplier',apiSwapi.createSupplier)




module.exports = router;
