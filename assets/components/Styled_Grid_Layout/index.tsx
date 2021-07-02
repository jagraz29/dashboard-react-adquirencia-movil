import React from 'react'
import styled from 'styled-components'
import { any } from 'prop-types'

const Styled_Grid_Layout = ({
  gap,
  rows,
  columns,
  unitGap,
  margin,
  widthRows,
  widthColumns,
  autoRows,
  autoColumns,
  width,
  height,
  padding,
  position,
  color,
  backgroundColor,
  className,
  style,
  sm,
  md,
  lg,
  xl,
}: any) => {
  return styled.div`
    display: grid;
    position: ${position};

    width: ${width ? width : '100%'};
    height: ${height};
    padding: ${padding};
    margin: ${margin};

    color: ${color};
    background-color: ${backgroundColor};

    grid-auto-rows: ${autoRows ? autoRows : ''};
    grid-auto-columns: ${autoColumns ? autoColumns : ''};
    &.grid_layout_epayco {
      grid-template-columns: ${columns && widthColumns
        ? 'repeat(' + columns + ',' + widthColumns + ')'
        : ''};
      grid-template-rows: ${rows && widthRows ? 'repeat(' + rows + ',' + widthRows + ')' : ''};
      grid-gap: ${gap};
    }

    @media only screen and (max-width: 425px) {
      &.grid_layout_epayco {
        grid-template-columns: ${sm && sm.columns && sm.widthColumns
          ? 'repeat(' + sm.columns + ',' + sm.widthColumns + ')'
          : ''};
      }
    }

    @media only screen and (min-width: 768px) {
      &.grid_layout_epayco {
        grid-template-columns: ${md && md.columns && md.widthColumns
          ? 'repeat(' + md.columns + ',' + md.widthColumns + ')'
          : ''};
      }
    }

    @media only screen and (min-width: 1024px) {
      &.grid_layout_epayco {
        grid-template-columns: ${lg && lg.columns && lg.widthColumns
          ? 'repeat(' + lg.columns + ',' + lg.widthColumns + ')'
          : ''};
      }
    }

    @media only screen and (min-width: 1440px) {
      &.grid_layout_epayco {
        grid-template-columns: ${xl && xl.columns && xl.widthColumns
          ? 'repeat(' + xl.columns + ',' + xl.widthColumns + ')'
          : ''};
      }
    }
  `
}

export default Styled_Grid_Layout
