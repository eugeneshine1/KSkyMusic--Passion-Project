import './home.scss';

import React from 'react';
import MoreHome from 'app/shared/musicComponents/MoreHome';

import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="9">
        <h2>
          <p>Welcome To KSkyMusic! Hope you enjoy the experience!</p>
        </h2>

        <div>
          <button type="button">Search for Music</button>
          <MoreHome />
        </div>
      </Col>
    </Row>
  );
};
export default Home;
