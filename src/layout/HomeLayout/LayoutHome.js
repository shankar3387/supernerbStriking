import React from 'react';
import { Row, Col } from 'antd';
import Header from './Header/Header';
// import { Aside, Content } from './overview/style';
// import './Header/header.css';
// import 'boostra'
const LayoutHome = WraperContent => {
  return () => {
    return (
      <div>
        <Header />
        <WraperContent />
      </div>
    );
  };
};

export default LayoutHome;
