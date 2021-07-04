import React, { useState } from 'react'
import './style.css'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
import { useEffect } from 'react'
function DatePick(props:any) {
  
  const minDate: Date = new Date(new Date().getFullYear(), 0, 1)
  const maxDate: Date = new Date(new Date())


  const onChange = (e: any) => {
    // console.log(e);
    props.setDatesValues({
      startDate:e.startDate,
      endDate:e.endDate
    }) 
    if(!e.startDate){
      props.handleDates(0,0)
    }else{
      props.handleDates(e.startDate.toISOString().slice(0,10),e.endDate.toISOString().slice(0,10))
    }
  } // the event handler

  
  return (
    <div>
      <DateRangePickerComponent
        placeholder="Seleccione fechas"
        startDate={props.datesValues.startDate}
        endDate={props.datesValues.endDate}
        min={minDate}
        max={maxDate}
        format="dd-MM-yy"
        change={onChange}
        cleared={()=>console.log("se cleared") }
        //Uncomment below code to show month range picker. Also comment the properties min, max, mindays and maxdays
        // start="Year"
        // depth="Year"
      ></DateRangePickerComponent>
    </div>
  )
}

export default DatePick
