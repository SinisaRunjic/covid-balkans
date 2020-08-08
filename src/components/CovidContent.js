import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import DateComponent from './DateComponent';
import '../style/style.css';

class CovidContent extends Component {
    render() {
        return (
            <div>
                {this.props.covidData && (
                    this.props.covidData.map(item =>
                        (
                            <div key={item.Country}>
                                <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                                    Covid Cases in: {item.Country}
                                </Divider>
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                    <Col className="gutter-row" span={8}>
                                        <div className="custom-box">Country: {item.Country} </div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <div className="custom-box">Cases: {item.Cases} </div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <DateComponent date={item.Date} />
                                    </Col>
                                </Row>
                            </div>
                        )
                    )
                )}
            </div>
        )
    }
}

export default CovidContent;