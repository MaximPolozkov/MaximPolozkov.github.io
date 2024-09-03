import { useState } from "react";
import TimeSlots from "./TimeSlots";
import Modal from "../Modal/Modal";


function CalendarDays(props) {

  const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];
  const today = new Date();
  today.setDate(0);

  const currentDate = new Date();
  console.log(currentDate);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowTimeSlots(true);
  };

  const handleCloseTimeSlots = () => {
    setShowTimeSlots(false);
  };

  const updateSelectedDay = (newDay) => {
    setSelectedDay(newDay);
    props.changeCurrentDay(newDay);
    setShowTimeSlots(false);
  };


  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    const calendarDay = {
      id: NaN,
      currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
      isPastDay: firstDayOfMonth < today,
      //isPastDay: firstDayOfMonth < currentDate,
    };
    
    currentDays.push(calendarDay);
    
  }

  return (
    <>
    <div className="table-content">
      {currentDays.map((day, index) => {
        day.id = index
        const isClickable = day.currentMonth && !day.isPastDay;
        day.date.setDate(day.date.getDate() + 1)
        day.isActive = day.currentMonth && day.date >= currentDate;

        return (
          <div
            key={index}
            className={`calendar-day ${day.currentMonth ? 'current' : ''} ${day.selected ? 'selected'  : ''} ${day.isActive ? 'active' : 'non'}`}
            onClick={() => isClickable && handleDayClick(day)}
            style={{ cursor: isClickable ? 'pointer' : 'default' }}
          >
            <p>{day.number}</p>
            {!selectedDay && day.isActive && showTimeSlots && (
              <TimeSlots  key={day} {...props.children} />
            )}
            </div>
        );
      })}
    </div>
    {selectedDay && showTimeSlots && (
      <Modal
      active={showTimeSlots} 
      setActive={setShowTimeSlots}
      children={<TimeSlots selectedDayClic={selectedDay} {...props.children}/>}
      />
      
    )}
    </>
  );
}


export default CalendarDays;