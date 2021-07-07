import React, { useEffect, useState } from 'react'
import { ContentPagination, Pagination, ItemP } from './styles'

const Paginations = ({ pagination, handlePage, active }: any) => {
  let objectPages: any = []
  const numberPages = Array(Math.ceil(pagination.totalCount / pagination.limit))
  if (active === 1) {
    if (numberPages.length < 4) {
      if (numberPages.length === 1) {
        objectPages.push(1)
      } else if (numberPages.length === 2) {
        objectPages.push(1, 2)
      } else {
        objectPages.push(1, 2, 3)
      }
    } else {
      objectPages.push(active, active + 1, active + 2)
    }
  }else{
    if(numberPages.length === 2){
      objectPages.push( active - 1, active)
    }else if (numberPages.length === active) {
      objectPages.push(active - 2, active - 1, active)
    } else {
      objectPages.push(active - 1, active, active + 1)
    }
  }

  // useEffect(() => console.log(objectPages, numberPages, active, "uiui"))
  return (
    <ContentPagination>
      <Pagination>
        <ul className="pagination">
          <li className="page-item">
            <button
              className={'page-link'}
              aria-label="Previous"
              onClick={() => {
                handlePage(1)
              }}
            >
              <span aria-hidden="true">{'<<'}</span>
            </button>
          </li>
          {objectPages.map((page: any) => {
            return (
              <li key={page} className="page-item">
                <button
                  className={active === page ? 'page-link active' : 'page-link'}
                  aria-label="Previous"
                  onClick={() => {
                    handlePage(page)
                  }}
                >
                  <span aria-hidden="true">{page}</span>
                </button>
              </li>
            )
          })}
          <li className="page-item">
            <button
              className={'page-link'}
              aria-label="Previous"
              onClick={() => {
                handlePage(numberPages.length)
              }}
            >
              <span aria-hidden="true">{'>>'}</span>
            </button>
          </li>
        </ul>
      </Pagination>
    </ContentPagination>
  )
}

export default Paginations
