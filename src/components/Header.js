import React, {useState} from 'react'
import {  Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap'
import { Link } from 'react-router-dom'



function Header() {

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Navbar color='light' light expand='md'>
          <div className='container'>
        <NavbarBrand className='container' tag={Link} to='/'>iSeries</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className='mr-auto' navbar>
              <NavItem>
              <NavLink tag={Link} to='/series'>Séries</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/generos'>Gêneros</NavLink>
              </NavItem>
          </Nav>
        </Collapse>
          </div>
      </Navbar>
    </div>
  )
}

export default Header
