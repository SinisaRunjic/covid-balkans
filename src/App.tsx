import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

class App extends React.Component {

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Header />
          <Content />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default App
