import fs from 'node:fs/promises'
import { get } from 'node:https'
import path from 'node:path'

export async function ImageLength () {
  const dirname = process.cwd().replace('\\utils', '')
  const ImagePath = path.join(dirname, 'public')
  const Files = await fs.readdir(ImagePath, { withFileTypes: true })
  const Images = Files.filter(file => file.name.endsWith('.jpeg'))
  return Images.length
}

export async function getImage (index) {
  const dirname = process.cwd().replace('\\utils', '')
  const ImagePath = path.join(dirname, 'public')
  const Image = await fs.readFile(path.join(ImagePath, `Foto${index}.jpeg`))
  return Image
}

