import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const secret = process.env.JWT_SECRET || 'default_secret'

export function generateToken(payload: object, expiresIn: string | number = '1h'): string {
  return jwt.sign(payload, secret, { expiresIn })
}

export function verifyToken(token: string): JwtPayload | string | null {
  try {
    const decoded = jwt.verify(token, secret)
    if (typeof decoded === 'string') {
      return decoded;
    }
    return decoded as JwtPayload
  } catch (error) {
    return null
  }
}
