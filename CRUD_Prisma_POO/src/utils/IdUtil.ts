import { randomUUID } from "crypto"

export class IdUtil{
    static generateUUID():string{
        return randomUUID()
    }
}
