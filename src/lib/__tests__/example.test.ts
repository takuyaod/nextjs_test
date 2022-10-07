import { square } from '../example'

describe('square', () => {
  it('計算結果が正しいこと', () => {
    const expected = 5
    expect(square(2)).toStrictEqual(expected)
  })
})
