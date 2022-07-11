import express from 'express'
import { getLinks } from '../controller/LinksController.js'

const router = express.Router()

router.get('/', getLinks)

export default router