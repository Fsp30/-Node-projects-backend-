import { createHash, randomBytes } from "crypto"

export class CryptoUtil{
    static hashPassword(password:string): string{
        const salt = randomBytes(16).toString('hex')
        const hash = createHash('sha256').update(password + salt).digest('hex')
        return `${hash}${salt}`	
    }

    static validatePassword(password:string, storedHash:string): boolean{
        const [salt, hash] = storedHash.split(':')
        const newHash = createHash('sha256').update(password + salt).digest('hex')
        return newHash === hash
    }
}