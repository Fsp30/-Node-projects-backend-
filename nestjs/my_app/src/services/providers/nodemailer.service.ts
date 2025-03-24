import { Injectable } from "@nestjs/common";
import { EmailService } from "../email.service.interface";
import * as nodemailer from 'nodemailer'

@Injectable()
export class NodeMailerEmailService implements EmailService{
        private transporter = nodemailer.createTransport({
                service: 'gmail',
                auth:{
                        user: process.env.EMAIL,
                        pass:process.env.EMAIL_PASS,
                },
        })
        async sendMail(to: string, subject: string, body: string): Promise<void> {
            await this.transporter.sendMail({
                from: process.env.EMAIL,
                to,
                subject,
                text: body
            })
        }
}