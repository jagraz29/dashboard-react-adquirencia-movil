import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TABLET, MOBILE } from '../../styles/breakpoints'

export const Nav = styled.div`
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px;
  position: relative;
  width: 100%;
  button {
    background: red;
    display: none;
  }
  @media (max-width: ${TABLET}) {
    button {
      display: block;
    }
  }
`
export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 20vw auto;
  grid-template-rows: 3rem;
  @media (max-width: ${TABLET}) {
    grid-template-columns: 100%;
  }
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
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  @media (max-width: ${TABLET}) {
    position: absolute;
    background: red;
    width: 13rem;
    left: ${(props: any) => (props['data-show'] ? '0' : '-100%')};
  }
`

export const SidebarWrap = styled.div`
  width: 100%;
  margin-top: 3rem;

  div {
    text-align: -webkit-center;
    padding: 1rem 0;
    label {
      border: 1px solid hsla(0, 0%, 100%, 0.2);
      text-align: center;
      color: white;
      border: 1px solid white;
      text-align: center;
      background-color: #222222;
      width: 80%;
      border-radius: 4px;
      padding: 0.3rem;
    }
  }
  ul {
    padding: 0 1rem;
    li {
      font-weight: bold;
      list-style: none;
      color: white;
      padding: 0.3rem 0;
      cursor: pointer;
      img {
        padding: 0 5px;
      }
    }
  }
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
