import React, { useState } from 'react'
import './style.css'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
function DatePick() {
  const startValue: Date = new Date(new Date())
  const endValue: Date = new Date(new Date())
  const minDate: Date = new Date(new Date().getFullYear(), 0, 1)
  const maxDate: Date = new Date(new Date())

  const [range, setRange] = useState()
  const onChange = (e: any) => {
    setRange(e.text)
    console.log(range)
  } // the event handler
  return (
    <div>
      <DateRangePickerComponent
        placeholder="Seleccione fechas"
        startDate={startValue}
        endDate={endValue}
        min={minDate}
        max={maxDate}
        format="dd-MMM-yy"
        change={onChange}
        //Uncomment below code to show month range picker. Also comment the properties min, max, mindays and maxdays
        // start="Year"
        // depth="Year"
      ></DateRangePickerComponent>
    </div>
  )
}

export default DatePick
