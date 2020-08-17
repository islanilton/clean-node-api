import validator from 'validator'

import { EmailValidator } from '../presentation/protocols/email-validator'
export class EmailValidatorAdampter implements EmailValidator {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
