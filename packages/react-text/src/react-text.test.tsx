import { describe, test, expect } from 'bun:test'
import { Text } from './react-text'
import { render } from '@testing-library/react'

describe('Text tests', () => {
  test('shoud compile Text', () => {
    const text = 'hello world'
    const { container } = render(<Text text={text} />)

    const data = container.querySelector('span')
    expect(data?.innerHTML).toEqual('hello world')
  })
})
