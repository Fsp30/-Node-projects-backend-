export interface EmailService{ 
        sendMail(to: string, subject:string, body:string):Promise<void>
}