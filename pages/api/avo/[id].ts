import { NextApiRequest, NextApiResponse } from 'next'
import Database from '@database'

const AvosById = async (request: NextApiRequest, response: NextApiResponse) => {

  const id = request.query.id as string

  const db = new Database()
  const entryById = await db.getById(id)  // ojo, esto es una trampa 

  // response.statusCode = 200
  // response.setHeader('Content-type', 'application/json')
  // response.end(JSON.stringify({ data: entryById }))

  response.status(200).json(entryById)
}

export default AvosById