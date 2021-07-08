import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TABLET, MOBILE } from '../../styles/breakpoints'

export const NavContainer = styled.div`
  /* display: grid;
  grid-template-columns: 16vw; */
  /* grid-template-rows: 3rem; */
  @media (max-width: ${TABLET}) {
    grid-template-columns: 100%;
  }
`

export const SidebarNav = styled.nav`
  background: #3a3a3a;
  width: 100%;
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  /* top: 0;
  left: 0; */

  @media (max-width: ${TABLET}) {
    position: absolute;
    width: 16rem;
    left: ${(props: any) => (props['data-show'] ? '0' : '-100%')};
    z-index: ${(props: any) => (props['data-show'] ? '200' : '0')};
  }
`
export const IconLeftMenu = styled.nav`
    padding: 0;
    color: white;
    display: flex;
    justify-content: flex-end;
    margin: 0.5rem 1rem;
`


export const SidebarWrap = styled.div`
  width: 100%;
  margin-top: 1rem;
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