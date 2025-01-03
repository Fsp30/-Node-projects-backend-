import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwtUtils"

declare global {
  namespace Express {
    interface Request {
      user?: any
    }
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const authorizationHeader = req.headers.authorization
  const token = authorizationHeader?.split(" ")[1] 

  if (!token) {
    res.status(401).json({ error: "Token não provido" })
    return
  }

  const decoded = verifyToken(token)
  if (!decoded) {
    res.status(401).json({ error: "Token inválido ou expirado" })
    return
  }

  req.user = decoded
  next()
}
