import { NextApiRequest, NextApiResponse } from 'next'
import Database from '@database'

const AllAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  
  const db = new Database()
  const allEntries = await db.getAll()
  const length = allEntries.length

  // response.statusCode = 200
  // response.setHeader('Content-type', 'application/json')
  // response.end(JSON.stringify({ data: allEntries, length }))

  response.status(200).json({ data: allEntries, length })
}

export default AllAvos