import { getEstudiante, getAllProjects } from '../models/mysql/client.js'

export class projectController {
  static async getEstudiante (req, res) {
    res.status(200).json(await getEstudiante())
  }

  static async getAllProjects (req, res) {
    res.status(200).json(await getAllProjects())
  }
}
