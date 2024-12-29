export class ValidationUtil{
    static validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    static isNotEmptyString(value:string):boolean{
        return typeof value === 'string' && value.trim().length > 0
    }
}