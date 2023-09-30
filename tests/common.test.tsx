import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Clock } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Clock format='LL' delayTimer={1000} />)
  })
})
