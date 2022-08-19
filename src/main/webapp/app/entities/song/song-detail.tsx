import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './song.reducer';

export const SongDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const songEntity = useAppSelector(state => state.song.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="songDetailsHeading">
          <Translate contentKey="kSkyMusicApp.song.detail.title">Song</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{songEntity.id}</dd>
          <dt>
            <span id="songType">
              <Translate contentKey="kSkyMusicApp.song.songType">Song Type</Translate>
            </span>
          </dt>
          <dd>{songEntity.songType}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="kSkyMusicApp.song.title">Title</Translate>
            </span>
          </dt>
          <dd>{songEntity.title}</dd>
          <dt>
            <span id="timeDuration">
              <Translate contentKey="kSkyMusicApp.song.timeDuration">Time Duration</Translate>
            </span>
          </dt>
          <dd>{songEntity.timeDuration}</dd>
          <dt>
            <Translate contentKey="kSkyMusicApp.song.album">Album</Translate>
          </dt>
          <dd>{songEntity.album ? songEntity.album.title : ''}</dd>
          <dt>
            <Translate contentKey="kSkyMusicApp.song.location">Location</Translate>
          </dt>
          <dd>{songEntity.location ? songEntity.location.weatherType : ''}</dd>
          <dt>
            <Translate contentKey="kSkyMusicApp.song.artist">Artist</Translate>
          </dt>
          <dd>
            {songEntity.artists
              ? songEntity.artists.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {songEntity.artists && i === songEntity.artists.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/song" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/song/${songEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default SongDetail;
