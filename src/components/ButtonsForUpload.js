import React from 'react';
import { Row, Button, Col } from 'antd';


const ButtonsForUpload = (props) => (
	<div style={{ textAlign: "center" }}>
		<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={{ textAlign: "center" }}>
			{
				props.countries && props.countries.map(country => (
					<Col key={country} className="gutter-row" xs={12} md={6} lg={4} xl={4}>
						<Button type="primary" shape='round' onClick={() => props.addData(country)} >Fetch data for {country}</Button>
					</Col>
				))
			}
		</Row>
	</div>
)

export default ButtonsForUpload;