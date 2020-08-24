import bcrypt from 'bcrypt'

import { BcryptAdapter } from './bcrypt-adapter'

const makeBcrypAdapter = (salt: number): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('BcryptAdapter', () => {
  test('Should call bcrypt if correct values', async () => {
    const salt = 12
    const sut = makeBcrypAdapter(salt)
    const hashSpay = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpay).toHaveBeenCalledWith('any_value', salt)
  })
})
