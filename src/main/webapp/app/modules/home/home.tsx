import './home.scss';

import React from 'react';
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
          <button>Search for Music</button>
        </div>
      </Col>
    </Row>
  );
};
export default Home;
