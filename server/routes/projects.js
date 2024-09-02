import { Router } from 'express'
import { projectController } from '../controllers/projects.js'

export const project = Router()

project.get('/estudiantes', projectController.getEstudiante)
project.get('/projects', projectController.getAllProjects)
