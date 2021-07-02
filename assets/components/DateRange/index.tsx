import React, { useState } from 'react'
import './style.css'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
import { useEffect } from 'react'
function DatePick(props:any) {
  
  const minDate: Date = new Date(new Date().getFullYear(), 0, 1)
  const maxDate: Date = new Date(new Date())
  const [startValue,setStartValue] = useState(new Date())
  const [endValue,setEndValue] = useState(new Date())

  const onChange = (e: any) => {
    
    console.log(e)
    setStartValue(e.startDate),
    setEndValue(e.endDate)
    console.log(e.startDate.toISOString().slice(0,10),e.startDate);
    
    props.eventDate(`&fromDate=${e.startDate.toISOString().slice(0,10)}&toDate=${e.endDate.toISOString().slice(0,10)}`)
  } // the event handler

  
  return (
    <div>
      <DateRangePickerComponent
        placeholder="Seleccione fechas"
        // startDate={startValue}
        // endDate={endValue}
        min={minDate}
        max={maxDate}
        format="dd-MM-yy"
        change={onChange}
        //Uncomment below code to show month range picker. Also comment the properties min, max, mindays and maxdays
        // start="Year"
        // depth="Year"
      ></DateRangePickerComponent>
    </div>
  )
}

export default DatePick
