import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 0.3vw;
  list-style: none;
  text-decoration: none;
  width: 12vw;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2vw;
  line-height: 2vw;
  color: #ffffff;
`

export const Icons = styled.img`
  width: 1.8vw;
`

export const SidebarLabel = styled.span`
  margin-left: 1vw;
  line-height: 2vw;
  position: absolute;
`
