import React from 'react';
import { Row, Col, Divider } from 'antd';
import DataComponent from '../DataComponent'
import {ICovidContent} from './interface'

const CovidContent = (props: ICovidContent) => {
    return (
			<div>
				{props.covidData && (
					props.covidData.map((item:any) =>
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
									<DataComponent date={item.Date} />
								</Col>
							</Row>
						</div>
					)
					)
				)}
			</div>
		)
}

export default CovidContent
