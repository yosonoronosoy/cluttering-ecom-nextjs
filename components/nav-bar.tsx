import Link from 'next/link'
import styled from 'styled-components'
import UnstyledLink from './styled/UnstyledLink'
import {FiShoppingCart} from 'react-icons/fi'
import {useCartContext} from '@/context/cart-context'

function NavBar() {
  const {openCart} = useCartContext()

  return (
    <Nav>
      <NavContainer>
        <Link href='/'>
          <UnstyledLink>Super Store</UnstyledLink>
        </Link>
        <ShoppingCart onClick={openCart} />
      </NavContainer>
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: white;
  padding: 2rem;
`
const NavContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
`

const ShoppingCart = styled(FiShoppingCart)`
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`

export default NavBar
