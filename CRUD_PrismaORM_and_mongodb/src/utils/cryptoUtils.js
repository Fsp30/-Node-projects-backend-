import crypto from 'crypto'

const generateId = () => crypto.randomUUID()
const generatePassword = () => crypto.randomBytes(16).toString('hex')

module.exports = {generateId, generatePassword}