import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import HomeComponent from './components/HomeComponent' 
import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
          <Col span={16} offset={4}>
            <HomeComponent />
          </Col>
      </Row>
    </div>
  );
}

export default App;
