import { Button, Col, Layout, Row } from "antd";
import React from "react";
import "./Header.css";

const { Header } = Layout;

const HeaderWrapper = () => {
  return (
    <Header className="site-layout-background custom-header">
      <Row>
        <Col className="gutter-row" span={2}></Col>
        <Col className="gutter-row" span={20}>
          <h1>Covid Data for Balkans</h1>
        </Col>
        <Col className="gutter-row" span={2}>
          <a
            href="https://github.com/SinisaRunjic/covid-balkans"
            target="_blank"
          >
            <Button type="link" block>
              Github Repo
            </Button>
          </a>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderWrapper;
