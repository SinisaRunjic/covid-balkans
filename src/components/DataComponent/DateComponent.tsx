import React, { useState } from 'react';
import {IDateComponent} from './interface'
import './DateComponent.css';


const DateComponent:React.FC<IDateComponent> = (props) => {
  const [date] = useState(new Date(props.date))

  return (
    <div className="custom-box">Last uptade: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()} </div>
  );
}

export default DateComponent
