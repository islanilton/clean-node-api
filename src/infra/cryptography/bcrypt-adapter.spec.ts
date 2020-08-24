import bcrypt from 'bcrypt'

import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return new Promise(resolve => resolve('hash'))
  }
}))

const makeBcryptAdapter = (salt: number): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('BcryptAdapter', () => {
  test('Should call bcrypt if correct values', async () => {
    const salt = 12
    const sut = makeBcryptAdapter(salt)
    const hashSpay = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpay).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a hash on success', async () => {
    const salt = 12
    const sut = makeBcryptAdapter(salt)
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })
})
