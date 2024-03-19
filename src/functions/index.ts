import express, { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../docs/swagger.json'
import catchAsyncErrors from '../utils/catchAsyncErrors'
import { getAllBooks, getUniqueBook, purchaseBook } from '../controller/booksController'
import serverless from "serverless-http"

const api = express()
const router = Router()

router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

router.get('/', catchAsyncErrors(getAllBooks))
router.get('/:id', catchAsyncErrors(getUniqueBook))
router.post('/:id/purchase', catchAsyncErrors(purchaseBook))

api.use('/.netlify/functions/', router)

export const handler = serverless(api)