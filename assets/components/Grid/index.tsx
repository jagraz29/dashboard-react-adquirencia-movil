import React from "react";
import Styled_Row_Table from "../Styled_Row_Table";
import {Styled_Grid_Layout} from "./style";

const validUnit = (value: string) => {
    return(
        value =='fr' ||
        value =='px' ||
        value =='em' ||
        value =='%' ||
        value =='auto' ||
        value =='min-content' ||
        value =='max-content' ||
        value =='minmax'
    );
};

const notUndefained = (data: any, type: any) => {
    const isData = typeof data != 'undefined' && typeof data != undefined && data != null
    const isType =
        typeof type != 'undefined' && typeof type != undefined && type != null && typeof data == type
    if (isType && isData) return isType
    return isData
}

const typeUnit = (value: string, unit='fr') =>{
    return notUndefained(value, 'number')
        ? `${value}${(notUndefained(unit, 'string') && validUnit(unit)) ? unit :'fr'}`
        : notUndefained(value, 'string') ? value : '1fr';
};

const typeValue =(value: any, start: any, end: any, position: any)=>{
    const undeStart = notUndefained(start, 'number');
    const undeEnd = notUndefained(end, 'number');
    const undePosition = notUndefained(position, 'string');

    // columnsStart || ((columnsEnd > 1) ? 1: columnsStart)
    const typeStar = (undePosition && position == 'start');
    if(typeStar) return ((undeStart && undeEnd) && start < end)
        ? start : ((!undeStart && undeEnd) && end > 1) ? 1 : start;
    // (columnsEnd > 1) ? (columnsEnd+1): columnsEnd
    const typeEnd = (undePosition && position == 'end');
    if(typeEnd && undeEnd) return (end > 1 && end > start) ? (end+1) : end;

    if(notUndefained(value, 'string')) return value;
    if(notUndefained(value, 'number')) return value;
    return undefined;
}

const GridLayout = (
    {
        gap,
        rows,
        columns,
        unitGap = 'px', // px, em, %

        unitRows = 'fr', // fr, px, em, %, auto, min-content, max-content, minmax
        unitColumns = 'fr', // fr, px, em, %, auto, min-content, max-content, minmax
        widthRows,
        widthColumns,
        autoRows,
        autoColumns,

        backgroundColor,
        position,
        padding,
        color,
        width,
        height,

        className,
        children,
        style,
        sm,
        md,
        lg,
        xl
    }: any
) => {
    return (
        <Styled_Grid_Layout
            gap={gap}
            rows={rows}
            columns={columns || 12}

            unitGap={unitGap}
            widthRows={typeUnit(widthRows, unitRows)}
            widthColumns={typeUnit(widthColumns, unitColumns)}
            autoRows={autoRows}
            autoColumns={autoColumns}

            width={width}
            height={height}
            padding={padding}
            position={position}
            color={color}
            backgroundColor={backgroundColor}

            className={`grid_layout_epayco  ${className || ''} `}
            style={style}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
        >
            {children}
        </Styled_Grid_Layout>
    );
}

const GridColumn = (
    {
        gap,
        unit = 'fr', // px, em, %
        columnsStart,
        columnsEnd,
        rowsStart,
        rowsEnd,

        displayFlex,
        justifyContent,
        alignItems,

        children,
        className,
        style,
        sm,
        md,
        lg,
        xl
    } : any
) => {

    const colStart = typeValue(columnsStart, columnsStart, columnsEnd, 'start');
    const colEnd   = typeValue(columnsEnd, colStart, columnsEnd, 'end');
    const rowStart = typeValue(rowsStart, rowsStart, rowsEnd, 'start');
    const rowEnd   = typeValue(rowsEnd, rowStart, rowsEnd, 'end');
    return (
        <Styled_Row_Table
            unit={unit}
            gap={gap}
            columnsStart={colStart}
            columnsEnd={colEnd}
            rowsStart={rowStart}
            rowsEnd={rowEnd}

            displayFlex={displayFlex}
            justifyContent={justifyContent}
            alignItems={alignItems}

            className={className}
            style={style}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
        >
            {children}
        </Styled_Row_Table>
    );
}

export default {
    GridColumn,
    GridLayout
}