import styled from 'styled-components'

export const Breadcrumb = styled.ul`
  position: absolute;
  left: 19vw;
  list-style: none;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  padding: 0;
  & > li:after {
    content: '/';
    padding: 0 3px;
  }
`

export const Crumb = styled.li`
  display: inline-block;

  &:last-of-type:after {
    content: '';
    padding: 0;
  }

  a {
    color: #40a8e6;
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`
