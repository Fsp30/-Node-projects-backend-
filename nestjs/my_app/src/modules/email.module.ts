import {Module} from '@nestjs/common'
import { EmailService } from 'src/services/email.service.interface'
import { NodeMailerEmailService } from 'src/services/providers/nodemailer.service'

@Module({
        providers:[{
                provide: 'EmailService',
                useClass: NodeMailerEmailService
        },
],
exports:['EmailService'],
})
export class EmailModule{}