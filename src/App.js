import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './style/style.css'
import ButtonsForUpload from './components/ButtonsForUpload';
import { connect } from 'react-redux';
import { fetchCovidData } from './actions/covidDataAction';
import CovidContent from './components/CovidContent';
import { countries } from './utils';

const { Header, Content, Footer } = Layout;




class App extends React.Component {

  addData = (country) => {
    this.props.fetchCovidData(country.toLowerCase())
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Header className="site-layout-background custom-header" style={{ padding: 0, }} >
            <h1>Covid Data for Balkans</h1>
          </Header>

          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <ButtonsForUpload countries={countries} addData={this.addData} />
              <CovidContent covidData={this.props.covidData.data} />

            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Data has been taken from covid19api.com
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect(
  (state) => ({
    covidData: state.covidData
  }), {
  fetchCovidData,
})(App);
