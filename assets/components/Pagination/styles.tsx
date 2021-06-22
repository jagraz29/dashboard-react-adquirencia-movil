import styled from 'styled-components'

export const ContentPagination = styled.div`
  text-align: center;
`

export const Pagination = styled.div`
  display: inline-block;
`

export const ItemP = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
  margin: 0 4px;

  .active {
    background-color: #4caf50;
    color: white;
    border: 1px solid #4caf50;
  }

  :hover:not(.active) {
    background-color: #ddd;
  }
`
