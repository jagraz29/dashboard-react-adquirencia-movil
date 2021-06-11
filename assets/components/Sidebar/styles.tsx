import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
  background: white;
  height: 3.5vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px;
  width: 82vw;
  left: 18vw;
  position: absolute;
`

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const SidebarNav = styled.nav`
  background: #3a3a3a;
  width: 18vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${(sidebar) => (sidebar ? '0' : '-100%')};
`

export const SidebarWrap = styled.div`
  width: 100%;
  top: 20vw;
`

export const Submenu = styled.div`
  position: absolute;
  top: 14.6vw;
  left: 1vw;
`

export const ContenSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AvatarImg = styled.div`
  position: absolute;
  width: 6vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 1vw;
`
