import styled from 'styled-components'
import { TABLET, MOBILE } from '../../styles/breakpoints'

export const NavContainer = styled.div`
  @media (max-width: ${TABLET}) {
    grid-template-columns: 100%;
  }
  `
export const BackShadow = styled.div`
  @media (max-width: ${TABLET}) {
    position: absolute;
    width: ${(props: any) => (props['data-show'] ? '100vw' : '0')};;
    height: 100vh;
    /* backdrop-filter: brightness(0.5); */
    z-index: 10;
    background: rgba(0,0,0,.3);
  }
`

export const SidebarWrap = styled.div`
  width: 100%;
  margin-top: 3rem;
  text-align: center;

  div {
    text-align: -webkit-center;
    padding: 1rem 0;
    label {

      text-transform: capitalize;
      min-height: 1.5rem;
      height: auto;
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
      display: flex;
      align-items: center;
      font-weight: bold;
      list-style: none;
      color: white;
      padding: 0.3rem 0;
      cursor: pointer;
      img {
        padding: 0 5px;
      }
      h4{
        margin: 0;
        padding-left: 0.5rem;
      }
    }
  }
`

export const SidebarNav = styled.nav`
  background: #3a3a3a;
  width: 100%;
  height: 100vh;
  display: flex;

  @media (max-width: ${TABLET}) {
    position: absolute;
    width: 16rem;
    transition: left 0.5s;
    left: ${(props: any) => (props['data-show'] ? '0' : '-100%')};
    z-index:2000;
    overflow-y: auto;
    ${SidebarWrap}{
      margin-top:1rem;
    }
  }
`
export const IconLeftMenu = styled.nav`
    display: none;
    @media (max-width: ${TABLET}) {
      display: ${(props: any) => (props['data-show'] ? 'flex' : 'none')};
      padding: 0;
      color: white;
      justify-content: flex-end;
      margin: 0.5rem 1rem;
      cursor: pointer;
    }
`