import express, { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../../src/docs/swagger.json'
import catchAsyncErrors from '../../src/utils/catchAsyncErrors'
import { getAllBooks, getUniqueBook, purchaseBook } from '../../src/controller/booksController'
import serverless from "serverless-http"

const api = express()
const router = Router()

router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

router.get('/', catchAsyncErrors(getAllBooks))
router.get('/:id', catchAsyncErrors(getUniqueBook))
router.post('/:id/purchase', catchAsyncErrors(purchaseBook))

api.use('/books', router)

export const handler = serverless(api)