import { EmailValidatorAdampter } from './email-validator'

describe('EmailValidator Adapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdampter()
    const isValid = sut.isValid('invalid_email')
    expect(isValid).toBe(false)
  })
})
