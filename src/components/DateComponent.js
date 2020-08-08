import React, { Component } from 'react';
import '../style/style.css';


class DateComponent extends Component {
    render() {
        const date = new Date(this.props.date);
        return (
            <div className="custom-box">Last uptade: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()} </div>
        );
    }
}


export default DateComponent;