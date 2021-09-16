import React from 'react';
import "./calender.css"

import UseCalender from './UseCalender';

const Calendar = () => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = UseCalender();

  const dateClickHandler = date => {
    console.log(date);
  }

  return(
    <>
     <div class="widget">
        <div class="widget-title h6" style={{ marginBottom: "20px" }} >Calendar</div>
        <span className="container d-flex justify-content-center"
        style={{ background: "#104a3a", borderRadius: "5px 5px 0px 0px",
        fontSize: "17px", fontWeight: "700", color: "#fff",
}}>
    <div className="rdc-panel" style={{paddingTop: "10px", paddingBottom: "10px"}}>
                      <div className="rdc-prev"  onClick={getPrevMonth}></div>
                      <div className="rdc-panel-title"><span className="rdc-month"></span><span className="rdc-fullyear">
                      {`${monthNames[selectedDate.getMonth()]}, ${selectedDate.getFullYear()}`}
                      </span>
                      </div>
                      <div className="rdc-next" onClick={getNextMonth}></div>
                    </div>
      </span>
      <div style={{ background: "#fff", paddingTop: "20px" }}></div>

      <table className="tables">
        <thead style={{ background: "#fff", fontWeight: "100" }} >
          <tr>
            {daysShort.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{background: "#fff"}} >
          {
            Object.values(calendarRows).map(cols => {
              return <tr key={cols[0].date}  >
                {cols.map(col => (
                  col.date === todayFormatted
                    ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)} style={{borderRadius: "5px", padding: "5px 0px 5px 0px", }} >
                      {col.value}
                    </td>
                    : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                ))}
              </tr>
            })
          }
        </tbody>
      </table>

      </div>
    </>
  );
}

export default Calendar;