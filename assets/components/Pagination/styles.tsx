import styled from 'styled-components'

export const ContentPagination = styled.div`
  text-align: center;
`

export const Pagination = styled.div`
  display: inline-block;
  ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
    padding-left: 1vw;
  }

  ul.pagination li {
    display: inline;
  }

  ul.pagination li a {
    color: #40a8e6;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #40a8e6;
    border-radius: 4px;
  }

  ul.pagination li a.active {
    background-color: #4caf50;
    color: white;
    border: 1px solid #4caf50;
  }

  ul.pagination li a:hover:not(.active) {
    background-color: #ddd;
  }
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
