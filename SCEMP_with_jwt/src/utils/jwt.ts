import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET as string
export const generateToken = (payload: object) => {
    return jwt.sign(payload, secret, {expiresIn: "1h"})
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, secret)
}