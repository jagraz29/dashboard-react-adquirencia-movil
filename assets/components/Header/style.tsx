import styled from 'styled-components'
import { TABLET, MOBILE } from '../../styles/breakpoints'

export const Header = styled.header`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
  width: 100%;
  height: 3rem;
  
`
export const ContainerButtonMenu = styled.div`
    margin: 0 1rem;
    button {
      display: none;
    }
    @media (max-width: ${TABLET}) {
      button {
        display:${(props: any) => (props['data-sidebar'] ? 'none' : 'block')};
        /* display: block; */
        position: relative;
        z-index: 1000;
        border-radius: 4px;
        font-size: 25px;
        border: 1px solid #e4e4e4;
        padding-top: 0.3rem;
      }
    }
`

export const ContenSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AvatarImg = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerUser = styled.div`
    display: flex;
    color: #cecece;
    font-size: 35px;
    margin: 0 1rem;
`