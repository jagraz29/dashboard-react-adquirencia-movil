import React from 'react'
import styled from "styled-components";

const notUndefained = (data: any, type: any) => {
    const isData = typeof data != 'undefined' && typeof data != undefined && data != null
    const isType =
        typeof type != 'undefined' && typeof type != undefined && type != null && typeof data == type
    if (isType && isData) return isType
    return isData
}

const Styled_Row_Table =  ({
    gap,
    displayFlex,
    justifyContent,
    alignItems,
    rowsStart,
    rowsEnd,
    columnsStart,
    columnsEnd,
    sm,
    md,
    lg,
    xl
}: any) => {
    return (
        styled.div`
          display: ${(typeof displayFlex !== "undefined") ? 'flex': '' };
          justify-content: ${justifyContent};
          align-items: ${alignItems};
          
          grid-row-start: ${rowsStart};
          grid-row-end: ${rowsEnd};
          grid-row-gap: ${
                   gap && (rowsStart || rowsEnd)
                        ? gap : ''
                    };
         
          grid-column-start: ${columnsStart};
          grid-column-end: ${columnsEnd};
          grid-column-gap: ${
                    (gap && (columnsEnd || columnsStart))
                        ? gap : ''
                    };
          
          @media all and (min-width:425px) {
              grid-column-start: ${ (notUndefained(sm, 'number') && sm.columnsStart)
                    ? sm.columnsStart : ''};
              grid-column-end: ${(notUndefained(sm, 'number') && sm.columnsEnd)
                    ? sm.columnsEnd : ''};
          }
          @media all and (min-width:768px) {
              grid-column-start: ${ (md && md.columnsStart)
                    ? md.columnsStart : ''};
              grid-column-end: ${ (md && md.columnsEnd)
                    ? md.columnsEnd : ''};
          }
          @media all and (min-width:1024px) {
              grid-column-start: ${(lg && lg.columnsStart)
                    ? lg.columnsStart : ''};
              grid-column-end: ${(lg && lg.columnsEnd)
                    ? lg.columnsEnd : ''};
          }
          @media all and (min-width:1440px) {
              grid-column-start: ${ (xl && xl.columnsStart)
                    ? xl.columnsStart : ''};
              grid-column-end: ${(xl && xl.columnsEnd)
                    ? xl.columnsEnd : ''};
          }
        `
    )
}

export default Styled_Row_Table