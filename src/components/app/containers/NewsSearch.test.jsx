// behavior test 
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import NewsSearch from './NewsSearch'

describe('NewsSearch container', () => {
  afterAll(() => cleanup());

  it('updates search field value to tree', () => {
    // render NewsSearch page 
    render(<NewsSearch />)

    // get the search input field
    const searchInput = screen.getByTestId("search-input")

    // select display
    const display = screen.getByTestId("display")

    // use the search term - tree
    fireEvent.change(searchInput, {
      target: { value: 'tree' }
    })
    
    console.log('SEARCH INPUT VALUE', searchInput.value)

    expect(searchInput).toHaveValue('tree')
    expect(searchInput).toMatchSnapshot()
  })
})
