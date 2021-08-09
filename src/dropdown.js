import React from 'react'

export default function dropdown() {
    return (
        <div>
          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Navbar
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Dropdown</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Information</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>  
        </div>
    )
}
