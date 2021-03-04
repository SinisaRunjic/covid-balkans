import React from 'react'
import { Layout } from 'antd'

import './Footer.css';

const { Footer } = Layout;

const FooterWrapper: React.FC = () => {
  return (
    <Footer className="footer">
      Data has been taken from covid19api.com
    </Footer>
  )
}

export default FooterWrapper
