import { square } from '../example'

describe('square', () => {
  it('計算結果が正しいこと', () => {
    const expected = 6
    expect(square(3)).toStrictEqual(expected)
  })
})
