import React from 'react'
import { ContentPagination, Pagination, ItemP } from './styles'

const Paginations = () => {
  return (
    <ContentPagination>
      <Pagination>
        <ItemP>&laquo;</ItemP>
        <ItemP href={'#'}>1</ItemP>
        <ItemP href={'#'} className={'active'}>
          2
        </ItemP>
        <ItemP href={'#'}>3</ItemP>
        <ItemP>&raquo;</ItemP>
      </Pagination>
    </ContentPagination>
  )
}

export default Paginations
