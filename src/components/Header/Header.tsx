import { Layout } from 'antd';
import React from 'react'
import './Header.css'

const { Header } = Layout;


const HeaderWrapper = () => {
  return (
    <Header className="site-layout-background custom-header" >
      <h1>Covid Data for Balkans</h1>
    </Header>

  )
}

export default HeaderWrapper
