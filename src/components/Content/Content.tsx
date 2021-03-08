import { Layout } from "antd";
import React from "react";
import { connect } from "react-redux";
import CovidContent from "../CovidContent";
import ButtonsForUpload from "../ButtonsForUpload";
import { fetchCovidData } from "./reduxContent/action";
import { countries } from "../../utils";
import { IContent } from "./interface";
import './Content.css';

const { Content } = Layout;

const ContentWrapper: React.FC<IContent> = ({ covidData, fetchCovidData }) => {
  const addData = (country: string) => {
    fetchCovidData(country);
  };

  return (
    <Content className="site-layout-background customMargin">
      <div
        className="site-layout-background custonmPadding"
      >
        <ButtonsForUpload countries={countries} addData={addData} />
        <CovidContent covidData={covidData.data} />
      </div>
    </Content>
  );
};

const mapStateToProps = (state: any) => ({
  covidData: state.covidData,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchCovidData: (country: string) => dispatch(fetchCovidData(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentWrapper);
