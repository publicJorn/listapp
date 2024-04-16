import { Request, Response, NextFunction } from 'express'

// Use a simple functional middleware when it doesn't need dependencies
export function requestLogger(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.method} requested...`)
  console.log(`url: ${req.url}`)
  console.log(`params:\n${JSON.stringify(req.params, null, 2)}`)
  console.log(`body:\n${JSON.stringify(req.body, null, 2)}`)
  next()
}
