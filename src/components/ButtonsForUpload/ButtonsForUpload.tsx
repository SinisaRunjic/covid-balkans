import React from 'react'
import { Row, Button, Col } from 'antd';
import {IButtonsForUpload} from './interface';

const ButtonsForUpload:React.FC<IButtonsForUpload> = ({countries, addData}) => {
  return (
    <div style={{ textAlign: "center" }}>
		<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={{ textAlign: "center" }}>
			{
				countries && countries.map((country:any) => (
					<Col key={country} className="gutter-row" xs={12} md={6} lg={4} xl={4}>
						<Button block type="primary" shape='round' onClick={() => addData(country)} >Data for {country}</Button>
					</Col>
				))
			}
		</Row>
	</div>
  )
}

export default ButtonsForUpload
